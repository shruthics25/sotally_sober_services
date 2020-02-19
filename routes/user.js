const { getUserDetails } = require('../handlers/user')
const Joi = require('@hapi/joi')

module.exports = [
  {
    method: 'GET',
    path: '/user',
    options: {
      description: 'Get a user Details',
      notes: 'Simple Api call to get a user details',
      tags: ['api'],
      handler: getUserDetails,
      validate: {
        params: Joi.object({
          categoryKey: Joi.string().required()
        })
      }
    }
  }
]
