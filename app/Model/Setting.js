'use strict'

const Lucid = use('Lucid')

class Setting extends Lucid {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'Common.uuid')
  }

}

module.exports = Setting
