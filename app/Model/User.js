'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'Common.uuid')
  }

  // static get primaryKey () {
  //   return 'userId'
  // }

}

module.exports = User
