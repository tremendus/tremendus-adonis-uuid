'use strict'

const User = use('App/Model/User')
// const Factory = use('Factory')
const seeds = require('../../resources/seeds/User')

class UserSeeder {

  * run () {
    for (let model of seeds) {
      yield User.create(model)
    }
    return
  }

}

module.exports = UserSeeder
