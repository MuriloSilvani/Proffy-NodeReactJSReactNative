import { Request, Response } from 'express'

import db from '../database/connection'
import convertHourToMinutes from '../utils/convertHourToMinutes'

interface ScheduledItem{
  week_day: number,
  from: string,
  to: string
}

export default class classesControler {
  async index(req: Request, res: Response) {
    const filters = req.query

    const week_day = filters.week_day as string
    const subject = filters.subject as string
    const time = filters.time as string

    if(!week_day || !subject || !time){
      res.status(400).json({
        error: 'Missing filters to search classes'
      })
    }

    const timeInMinutes = convertHourToMinutes(time)

    const classes = await db('classes')
      .whereExists(function (){
        this.select('class_scheduled.*')
          .from('class_scheduled')
          .whereRaw('`class_scheduled`.`class_id` = `classes`.`_id`')
          .whereRaw('`class_scheduled`.`week_day` = ?? ', [Number(week_day)])
          .whereRaw('`class_scheduled`.`from` <= ?? ', [Number(timeInMinutes)])
          .whereRaw('`class_scheduled`.`to` > ?? ', [Number(timeInMinutes)])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users._id')
      .select(['classes.*', 'users.*'])

    res.json(classes)
  }
  async create(req: Request, res: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      scheduled
    } = req.body
  
    const trx = await db.transaction()
    try {
  
      const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      })
    
      const user_id = insertedUsersIds[0]
    
      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id
      })
    
      const class_id = insertedClassesIds[0]
    
      const classScheduled = scheduled.map((scheduledItem: ScheduledItem) => {
        return {
          class_id,
          week_day: scheduledItem.week_day,
          from: convertHourToMinutes(scheduledItem.from),
          to: convertHourToMinutes(scheduledItem.to)
        }
      })
    
      await trx('class_scheduled').insert(classScheduled)
    
      await trx.commit()
    
      return res.status(201).send()
  
    } catch (error) {
      trx.rollback()
      console.log(error);
      
  
      return res.status(400).json({
        error: 'Erro creating new class'
      })
    }
  }
}