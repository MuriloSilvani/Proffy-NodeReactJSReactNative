import express from 'express'

import ClassesControler from './controllers/ClassesController'
const classesControler = new ClassesControler()

import ConnectionsControler from './controllers/ConnectionsController'
const connectionsControler = new ConnectionsControler()

const routes = express.Router()

routes.get('/classes', classesControler.index)
routes.post('/classes', classesControler.create)

routes.get('/connections', connectionsControler.index)
routes.post('/connections', connectionsControler.create)

export default routes