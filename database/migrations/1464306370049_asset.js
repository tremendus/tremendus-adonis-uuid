'use strict'

const Schema = use('Schema')

class AssetSchema extends Schema {

  up () {
    this.create('assets', (table) => {
      table.uuid('id').first()
      table.integer('product_id').references('id').inTable('products')
      table.integer('vendor_id').references('id').inTable('customers')
      table.integer('meta').references('id').inTable('metas')
      table.integer('location_id').index()
      table.string('serial', 64).index()
      table.string('status', 16).index()
      table.string('availability', 16).index()
      table.date('last_cal').index()
      table.date('next_cal').index()
      table.integer('cal_interval') // # months
      table.string('bin', 16)
      table.string('po', 16)
      table.string('invoice', 16)
      table.decimal('cost', 6, 2)
    })
  }

  down () {
    this.drop('assets')
  }

}

module.exports = AssetSchema
