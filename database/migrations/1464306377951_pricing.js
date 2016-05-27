'use strict'

const Schema = use('Schema')

class PricingSchema extends Schema {

  up () {
    this.create('pricings', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('pricings')
  }

}

module.exports = PricingSchema
