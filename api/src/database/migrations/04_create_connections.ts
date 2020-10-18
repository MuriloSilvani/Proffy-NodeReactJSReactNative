import Knex from 'knex'

export async function up(knex:Knex) {
  return knex.schema.createTable('connections', table => {
    table.increments('_id').primary()

    table.integer('user_id')
      .notNullable()
      .references('_id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table.timestamp('created_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable()
  })
}

export async function down(knex:Knex) {
  return knex.schema.dropTable('connections')
}
