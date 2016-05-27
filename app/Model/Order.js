'use strict'

const Lucid = use('Lucid')

class Order extends Lucid {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'Common.uuid')
  }

}

module.exports = Order
