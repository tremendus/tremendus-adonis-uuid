'use strict'

const Schema = use('Schema')

class SettingSchema extends Schema {

  up () {
    this.create('settings', (table) => {
      table.increments()
      table.uuid('uuid').notNullable().unique().index()
      table.timestamps()
    })
  }

  down () {
    this.drop('settings')
  }

}

module.exports = SettingSchema
