'use strict'

const Address = use('App/Model/Address')
// const Factory = use('Factory')
const seeds = require('../../resources/seeds/Address')

class AddressSeeder {

  * run () {
    for (let model of seeds) {
      yield Address.create(model)
    }
    return
  }

}

module.exports = AddressSeeder
