'use strict'
const User = use('App/Models/User')

class UserController {

  async create({ request, response }) {
    try {
      const { name, email, password } = request.body;

      const user = new User();

      await user.fill({ username: name, email, password, role: '1' });
      await user.save();

      return response.status(200).json(
        {
          message: 'Criado com Sucesso',
          user
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

module.exports = UserController
