'use strict'

const Schema = use('Schema')

class AddressSchema extends Schema {

  up () {
    this.create('addresses', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }

}

module.exports = AddressSchema
