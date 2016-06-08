'use strict'

const Schema = use('Schema')

class SettingSchema extends Schema {

  up () {
    this.table('settings', (table) => {
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
