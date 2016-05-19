'use strict'

const User = use('App/Model/User')

class DevelopController {
  * index (request, response) {

    // generate token
    // const user = yield User.find(1)
    // const token = yield request.auth.generate(user)

    response.json({})
  }
}

module.exports = DevelopController
