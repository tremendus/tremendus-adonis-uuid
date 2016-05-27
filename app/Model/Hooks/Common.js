'use strict'

const uuid = require('uuid')

const Common = exports = module.exports = {}

Common.uuid = function * (next) {
  this.id = uuid.v1()
  yield next
}
