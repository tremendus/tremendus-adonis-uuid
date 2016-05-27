'use strict'

const Schema = use('Schema')

class ContactInfoSchema extends Schema {

  up () {
    this.create('contact_infos', (table) => {
      table.uuid('id').first()
      table.integer('customer_id').references('id').inTable('customers')
      table.string('type', 16).index()
      table.string('value', 128).index()
      table.string('label', 32)
    })
  }

  down () {
    this.drop('contact_infos')
  }

}

module.exports = ContactInfoSchema
