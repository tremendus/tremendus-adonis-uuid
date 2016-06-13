'use strict'

const Schema = use('Schema')

class VendorItemSchema extends Schema {

  up () {
    this.create('vendor_items', (table) => {
      table.increments()
      table.uuid('uuid').notNullable().unique().index()
      table.uuid('vendor_id').references('id').inTable('customers')
      table.uuid('product_id').references('id').inTable('products')
      table.uuid('pricing_id').references('id').inTable('pricings')
      table.string('part', 32).index()
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('vendor_items')
  }

}

module.exports = VendorItemSchema
