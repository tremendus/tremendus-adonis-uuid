'use strict'

const Lucid = use('Lucid')

class Meta extends Lucid {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'Common.uuid')
  }

  setMeta (value) {
    if (!value) {
      return value
    }
    return JSON.stringify(value)
  }

  getMeta (value) {
    if (!value) {
      return value
    }
    return JSON.parse(value)
  }

}

module.exports = Meta
