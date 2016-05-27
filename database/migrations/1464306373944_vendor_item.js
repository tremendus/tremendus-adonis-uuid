'use strict'

const Schema = use('Schema')

class VendorItemSchema extends Schema {

  up () {
    this.create('vendor_items', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('vendor_items')
  }

}

module.exports = VendorItemSchema
