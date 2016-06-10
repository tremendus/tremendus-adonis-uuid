'use strict'

const Schema = use('Schema')

class OrderItemSchema extends Schema {

  up () {
    this.create('order_items', (table) => {
      table.uuid('id').notNullable().primary().first()
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('order_items')
  }

}

module.exports = OrderItemSchema
