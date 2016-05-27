'use strict'

const Schema = use('Schema')

class VendorItemSchema extends Schema {

  up () {
    this.create('vendor_items', (table) => {
      table.uuid('id').first()
      table.integer('vendor_id').references('id').inTable('customers')
      table.integer('product_id').references('id').inTable('products')
      table.integer('pricing_id').references('id').inTable('pricings')
      table.string('part', 32).index()
    })
  }

  down () {
    this.drop('vendor_items')
  }

}

module.exports = VendorItemSchema
