'use strict'

const Schema = use('Schema')

class AddressSchema extends Schema {

  up () {
    this.create('addresses', (table) => {
      table.uuid('id').first()
      table.integer('customer_id').references('id').inTable('customers')
      table.string('address', 128).index()
      table.string('address2', 128).index()
      table.string('city', 64).index()
      table.string('state', 32).index()
      table.string('zip', 8).index()
      table.string('country', 64).index()
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }

}

module.exports = AddressSchema
