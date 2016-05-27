'use strict'

const Customer = use('App/Model/Customer')
// const Factory = use('Factory')
const seeds = require('../../resources/seeds/Customer')

class CustomerSeeder {

  * run () {
    for (let model of seeds) {
      yield Customer.create(model)
    }
    return
  }

}

module.exports = CustomerSeeder
