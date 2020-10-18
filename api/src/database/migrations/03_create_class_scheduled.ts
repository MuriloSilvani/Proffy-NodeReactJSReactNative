import Knex from 'knex'

export async function up(knex:Knex) {
  return knex.schema.createTable('class_scheduled', table => {
    table.increments('_id').primary()
    table.integer('week_day').notNullable()
    table.integer('from').notNullable()
    table.integer('to').notNullable()

    table.integer('class_id')
      .notNullable()
      .references('_id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

export async function down(knex:Knex) {
  return knex.schema.dropTable('class_scheduled')
}
