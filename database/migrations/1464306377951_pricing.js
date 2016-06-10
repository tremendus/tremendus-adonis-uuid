'use strict'

const Schema = use('Schema')

class PricingSchema extends Schema {

  up () {
    this.create('pricings', (table) => {
      table.increments()
      table.uuid('uuid').notNullable()
      table.uuid('product_id').references('id').inTable('products')
      table.uuid('currency').index()
      table.uuid('tier').index()
      table.enum('type', ['oem', 'vendor', 'house']).index()
      table.decimal('cost', 10, 2)
      table.decimal('sell', 10, 2)
      table.decimal('day', 10, 2)
      table.decimal('week', 10, 2)
      table.decimal('month', 10, 2)
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('pricings')
  }

}

module.exports = PricingSchema
