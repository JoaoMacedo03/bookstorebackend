'use strict'
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  // Auth
  Route.post('login', 'AuthController.login')
  Route.post('logout', 'AuthController.logout').middleware(['auth'])

  // Book
  Route.get('book', 'BookController.list')
  Route.get('book/:id', 'BookController.listById').middleware(['auth'])
  Route.post('book', 'BookController.create').middleware(['auth'])
  Route.put('book', 'BookController.update').middleware(['auth'])
  Route.delete('book/:id', 'BookController.remove').middleware(['auth'])

  Route.post('users', 'UserController.create')
}).prefix('api/v1')
