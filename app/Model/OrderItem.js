'use strict'

const Lucid = use('Lucid')

class OrderItem extends Lucid {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'Common.uuid')
  }

}

module.exports = OrderItem
