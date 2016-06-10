'use strict'

const uuid = require('uuid')
const Hash = use('Hash')

const Common = exports = module.exports = {}

Common.uuid = function * (next) {
  console.log('uuid', Object.keys(this))
  // if (!this[this.primaryKey()]) {
  //   this[this.primaryKey()] = uuid.v4()
  // }
  if (!this.id) {
    this.id = uuid.v4()
  }
  yield next
}

Common.encryptPassword = function * (next) {
  if (this.password) {
    this.password = yield Hash.make(this.password)
  }
  yield next
}
