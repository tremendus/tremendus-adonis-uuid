'use strict'

const uuid = require('uuid')

const User = exports = module.exports = {}

User.uuid = function * (next) {
  // {this} belongs to model instance
  this.id = uuid.v1()
  yield next
}
