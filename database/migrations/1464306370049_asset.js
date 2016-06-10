'use strict'

const Schema = use('Schema')

class AssetSchema extends Schema {

  up () {
    this.create('assets', (table) => {
      table.uuid('id').notNullable().primary().first()
      table.uuid('product_id').references('id').inTable('products')
      table.uuid('vendor_id').references('id').inTable('customers')
      table.uuid('meta_id').references('id').inTable('metas')
      table.uuid('location_id').index()
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
      table.timestamp('purchased_at')
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('assets')
  }

}

module.exports = AssetSchema
