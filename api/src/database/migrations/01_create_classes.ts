import Knex from 'knex'

export async function up(knex:Knex) {
  return knex.schema.createTable('classes', table => {
    table.increments('_id').primary()
    table.string('subject').notNullable()
    table.decimal('cost').notNullable()

    table.integer('user_id')
      .notNullable()
      .references('_id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

export async function down(knex:Knex) {
  return knex.schema.dropTable('classes')
}
