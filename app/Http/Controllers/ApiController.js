'use strict'

// module.exports = require('./_ApiController')
// module.exports = require('adonis-restful-api')

// const RestfulController = require('adonis-restful-api')
const RestfulController = require('./_ApiController')

class ApiController extends RestfulController {}

module.exports = ApiController
