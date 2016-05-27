'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.string('id', 36)
      table.string('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UserSchema
