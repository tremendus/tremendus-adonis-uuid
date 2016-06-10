'use strict'

const Schema = use('Schema')

class ProductSchema extends Schema {

  up () {
    this.create('products', (table) => {
      table.uuid('id').notNullable().primary().first()
      table.uuid('manufacturer_id').references('id').inTable('customers')
      table.uuid('meta_id').references('id').inTable('metas')
      table.string('item', 64).unique()
      table.uuid('category_id').index()
      table.string('catalog', 64).index()
      table.string('part', 64).index()
      table.string('external_id', 36).index()
      table.string('name', 128)
      table.string('description', 255)
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('products')
  }

}

module.exports = ProductSchema
