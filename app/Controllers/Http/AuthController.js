'use strict'
const User = use('App/Models/User')

class AuthController {

  async login({ request, response, auth }) {
    try {
      const { email, password } = request.all()
      const user = await User.findBy('email', email)

      if(!user) throw new Error('ERRO_LOGIN')

      const token = await auth.attempt(email, password)

      return response.status(200).json(
        {
          message: 'Logado com sucesso',
          token,
          user
        }
      )
    } catch(err) {
      return response.status(401).json(
        {
          error: true,
          message: err.message
        }
      )
    }
  }

  async logout({ response }) {
    try {
      return true
    } catch(err) {
      return response.status(401).json(
        {
          message: error.message
        }
      )
    }
  }

}

module.exports = AuthController
