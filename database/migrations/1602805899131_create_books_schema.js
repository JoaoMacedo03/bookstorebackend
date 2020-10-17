'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateBooksSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('opinion', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = CreateBooksSchema
