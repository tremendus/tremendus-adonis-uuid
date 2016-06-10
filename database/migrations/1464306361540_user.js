'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.uuid('uuid').notNullable()
      table.uuid('meta_id').references('id').inTable('metas')
      table.string('first_name', 64).index()
      table.string('last_name', 64).index()
      table.string('name', 128).index()
      table.string('email', 128).unique().notNullable().index()
      table.string('password').index()
      table.integer('location').index()
      table.string('role', 8).index().default('user')
      table.boolean('is_admin')
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UserSchema
