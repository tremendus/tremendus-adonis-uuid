'use strict'

const ContactInfo = use('App/Model/ContactInfo')
// const Factory = use('Factory')
const seeds = require('../../resources/seeds/ContactInfo')

class ContactInfoSeeder {

  * run () {
    for (let model of seeds) {
      yield ContactInfo.create(model)
    }
    return
  }

}

module.exports = ContactInfoSeeder
