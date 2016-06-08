'use strict'

const Lucid = use('Lucid')

class Customer extends Lucid {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'Common.uuid')
  }

  meta () {
    return this.hasOne('App/Model/Meta')
  }

  addresses () {
    return this.hasMany('App/Model/Address')
  }

  contact_infos () {
    return this.hasMany('App/Model/ContactInfo')
  }

  orders () {
    return this.hasMany('App/Model/Order')
  }

  parent () {
    return this.belongsTo('App/Model/Customer', 'id', 'parent_id')
  }

  children () {
    return this.hasMany('App/Model/Customer', 'id', 'parent_id')
  }

}

module.exports = Customer
