'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| Router helps you in defining urls and their corresponding actions. Adonis
| Router is an upto date implementation of HTTP specs and handle common
| conventions gracefully.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

// Route.on('/').render('welcome')
// Route.get('/develop', 'DevelopController.index').middleware('auth')
Route.get('/develop', 'DevelopController.index')

// Auth
Route.post('/users/authenticate', 'UsersController.authenticate')

// API
Route.get('/api/parameters', 'ApiController.parameters')
Route.post('/api/:resource/query', 'ApiController.query')
Route.resource('/api/:resource', 'ApiController')
