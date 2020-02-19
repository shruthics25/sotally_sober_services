const { login, register } = require('../handlers/auth')
const Joi = require('@hapi/joi')

module.exports = [
  {
    method: 'POST',
    path: '/login',
    options: {
      description: 'Login User',
      notes: 'Simple Api call to login',
      tags: ['api'],
      handler: login,
      validate: {
        payload: Joi.object({
          email: Joi.string().required(),
          password: Joi.string().required()

        })
      }
    }
  },
  {
    method: 'POST',
    path: '/register',
    options: {
      description: 'Register User',
      notes: 'Simple Api call to register user to our application',
      tags: ['api'],
      handler: register,
      validate: {
        payload: Joi.object({
          email: Joi.string().required(),
          password: Joi.string().required(),
          name: Joi.string().required(),
          phoneNumber: Joi.string().required(),
          address: Joi.string().required()
        })
      }
    }
  }
]
