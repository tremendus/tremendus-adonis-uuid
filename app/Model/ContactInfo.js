'use strict'

const Lucid = use('Lucid')

class ContactInfo extends Lucid {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'Common.uuid')
  }

  customer () {
    return this.belongsTo('App/Model/Customer')
  }

}

module.exports = ContactInfo
