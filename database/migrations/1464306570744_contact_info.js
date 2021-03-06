'use strict'

const Schema = use('Schema')

class ContactInfoSchema extends Schema {

  up () {
    this.create('contact_infos', (table) => {
      table.increments()
      table.uuid('uuid').notNullable().unique().index()
      table.uuid('customer_id').references('id').inTable('customers')
      table.string('type', 16).index()
      table.string('value', 128).index()
      table.boolean('is_primary').index().default(0)
      table.boolean('is_link').default(0)
      table.string('label', 32)
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('contact_infos')
  }

}

module.exports = ContactInfoSchema
