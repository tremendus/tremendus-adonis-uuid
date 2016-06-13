'use strict'

class UsersController {
  * authenticate (request, response) {
    const auth = request.input('auth')
    const authed = yield request.auth.authenticator('session').attempt(auth.email, auth.password)
    const user = yield request.auth.authenticator('session').getUser()
    const token = yield request.auth.authenticator('jwt').generate(user)
    return response.json({ token, user })
  }
}

module.exports = UsersController
