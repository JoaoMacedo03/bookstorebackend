'use strict'
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class UserSeeder {
  async run () {
    await Database
    .from('users')
    .insert(
      {
        username: 'Admin',
        password: '$2a$10$hKIuw3p2BFC5m.nz1ZWCkuxINAFqGB/gY1ZdheIE/uCKSchG0V3UK',
        email: 'admin@bookstore.com'
      }
    )
  }
}

module.exports = UserSeeder
