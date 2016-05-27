'use strict'

const Lucid = use('Lucid')

class Customer extends Lucid {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'Common.uuid')
  }

}

module.exports = Customer
