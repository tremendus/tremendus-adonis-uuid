'use strict'

const Lucid = use('Lucid')

class VendorItem extends Lucid {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'Common.uuid')
  }

}

module.exports = VendorItem
