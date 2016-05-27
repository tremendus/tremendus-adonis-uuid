'use strict'

const Schema = use('Schema')

class PricingSchema extends Schema {

  up () {
    this.create('pricings', (table) => {
      table.uuid('id').first()
      table.integer('product_id').references('id').inTable('products')
      table.integer('currency').index()
      table.integer('tier').index()
      table.enum('type', ['oem', 'vendor', 'house']).index()
      table.decimal('cost', 10, 2)
      table.decimal('sell', 10, 2)
      table.decimal('day', 10, 2)
      table.decimal('week', 10, 2)
      table.decimal('month', 10, 2)
    })
  }

  down () {
    this.drop('pricings')
  }

}

module.exports = PricingSchema
