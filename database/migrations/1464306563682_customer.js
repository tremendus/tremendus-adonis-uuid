'use strict'

const Schema = use('Schema')

class CustomerSchema extends Schema {

  up () {
    this.create('customers', (table) => {
      table.increments()
      table.uuid('uuid').notNullable().unique().index()
      table.uuid('parent_id').references('id').inTable('customers').index()
      table.string('type', 16).index()
      table.string('first_name', 32).index()
      table.string('last_name', 64).index()
      table.string('name', 96).index()
      table.string('external_id', 32).index()
      table.string('role')
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('customers')
  }

}

module.exports = CustomerSchema
