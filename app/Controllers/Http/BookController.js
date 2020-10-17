'use strict'
const Book = use('App/Models/Book')

class BookController {

  async create({ request, response }) {
    try {
      const { name, opinion } = request.body;
      const book = new Book();

      await book.fill({ name, opinion });
      await book.save();

      return response.status(200).json(
        {
          message: 'Criado com Sucesso',
          book
        }
      );
    } catch(err) {
      return response.status(401).json(
        {
          error: true,
          message: err.message
        }
      );
    }
  }

  async list({ response }) {
    try {
      const books = await Book.all()
      return response.status(200).json(
        {
          message: 'Listado com Sucesso',
          books
        }
      );
    } catch(err) {
      return response.status(401).json(
        {
          error: true,
          message: err.message
        }
      );
    }
  }

  async listById({ request, response }) {
    try {
      const id = request.params
      const book = await Book.find(id)
      if(!book) throw new Error('Book not found')
      return response.status(200).json(
        {
          message: 'Listado com Sucesso',
          book
        }
      );
    } catch(err) {
      return response.status(401).json(
        {
          error: true,
          message: err.message
        }
      );
    }
  }

  async update({ request, response }) {
    try {
      const { name, opinion, id } = request.body
      const book = await Book.find(id)
      if(!book) throw new Error('Book not found')

      await book.merge({ name, opinion });
      await book.save();

      return response.status(200).json(
        {
          message: 'Atualizado com Sucesso',
          book
        }
      );
    } catch(err) {
      return response.status(401).json(
        {
          error: true,
          message: err.message
        }
      );
    }
  }

  async remove({ request, response }) {
    try {
      const { id } = request.params
      const book = await Book.find(id)
      if(!book) throw new Error('Book not found')

      await book.delete();

      return response.status(200).json(
        {
          message: 'Deletado com Sucesso'
        }
      );
    } catch(err) {
      return response.status(401).json(
        {
          error: true,
          message: err.message
        }
      );
    }
  }

}

module.exports = BookController
