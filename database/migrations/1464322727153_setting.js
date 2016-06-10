'use strict'

const Schema = use('Schema')

class SettingSchema extends Schema {

  up () {
    this.table('settings', (table) => {
      table.uuid('id').notNullable().primary().first()
      // alter setting table
    })
  }

  down () {
    this.table('settings', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = SettingSchema
