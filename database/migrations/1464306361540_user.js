'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.uuid('id').first()
      table.integer('meta').references('id').inTable('metas')
      table.string('firstname', 64).index()
      table.string('lastname', 64).index()
      table.string('name', 128).index()
      table.string('email', 128).unique().notNullable().index()
      table.string('password').index()
      table.integer('location').index()
      table.string('role', 8).index().default('user')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UserSchema
