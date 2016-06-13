'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'Common.uuid')
    this.addHook('beforeCreate', 'Common.encryptPassword')
    this.addHook('beforeUpdate', 'Common.encryptPassword')
  }

  static get hidden () {
    return ['password']
  }

}

module.exports = User
