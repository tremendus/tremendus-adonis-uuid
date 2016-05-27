'use strict'

const Lucid = use('Lucid')

class Product extends Lucid {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'Common.uuid')
  }

}

module.exports = Product
