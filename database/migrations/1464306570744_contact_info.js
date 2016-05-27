'use strict'

const Schema = use('Schema')

class ContactInfoSchema extends Schema {

  up () {
    this.create('contact_infos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('contact_infos')
  }

}

module.exports = ContactInfoSchema
