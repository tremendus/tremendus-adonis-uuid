'use strict'

const Schema = use('Schema')

class OrderSchema extends Schema {

  up () {
    this.create('orders', (table) => {
      table.increments()
      table.uuid('uuid').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }

}

module.exports = OrderSchema
