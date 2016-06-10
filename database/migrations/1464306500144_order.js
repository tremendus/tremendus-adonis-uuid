'use strict'

const Schema = use('Schema')

class OrderSchema extends Schema {

  up () {
    this.create('orders', (table) => {
      table.uuid('id').notNullable().primary().first()
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }

}

module.exports = OrderSchema
