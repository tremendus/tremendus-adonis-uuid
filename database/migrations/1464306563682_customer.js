'use strict'

const Schema = use('Schema')

class CustomerSchema extends Schema {

  up () {
    this.create('customers', (table) => {
      table.uuid('id').first()
      table.integer('parent_id').references('id').inTable('customers')
      table.string('type', 16).index()
      table.string('first_name', 32).index()
      table.string('first_name', 64).index()
      table.string('external_id', 32).index()
      table.string('role')
    })
  }

  down () {
    this.drop('customers')
  }

}

module.exports = CustomerSchema
