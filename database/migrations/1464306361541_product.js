'use strict'

const Schema = use('Schema')

class ProductSchema extends Schema {

  up () {
    this.create('products', (table) => {
      table.uuid('id').first()
      table.integer('manufacturer_id').references('id').inTable('customers')
      table.integer('meta').references('id').inTable('metas')
      table.string('item', 64).unique()
      table.integer('category_id').index()
      table.string('catalog', 64).index()
      table.string('part', 64).index()
      table.string('external_id', 36).index()
      table.string('name', 128)
      table.string('description', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }

}

module.exports = ProductSchema
