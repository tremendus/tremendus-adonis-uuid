'use strict'

const Lucid = use('Lucid')

class Address extends Lucid {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'Common.uuid')
  }

  customer () {
    return this.belongsTo('App/Model/Customer')
  }

}

module.exports = Address
