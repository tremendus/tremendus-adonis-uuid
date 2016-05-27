'use strict'

const Lucid = use('Lucid')

class Pricing extends Lucid {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'Common.uuid')
  }

}

module.exports = Pricing
