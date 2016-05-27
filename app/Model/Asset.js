'use strict'

const Lucid = use('Lucid')

class Asset extends Lucid {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'Common.uuid')
  }

}

module.exports = Asset
