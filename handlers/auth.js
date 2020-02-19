const { User } = require('../models/user')
const { unauthorizedResponse, conflictResponse, successResponse } = require('./response')
const jwt = require('jsonwebtoken')

const login = async (request, h) => {
  const userdetails = request.payload
  return User.findOne({ email: userdetails.email, password: userdetails.password }, { password: 0, _id: 0, __v: 0 }).lean().then(loggedInUser => {
    let response = unauthorizedResponse
    console.log(loggedInUser)
    if (loggedInUser) {
      const token = jwt.sign({ email: userdetails.email }, 'cartFuLL9876')
      response = successResponse
      loggedInUser.token = token
      response.result = loggedInUser
    }
    return response
  })
}

const register = async (request, h) => {
  const userpayload = request.payload
  return User.insertMany([userpayload]).then(doc => {
    return successResponse
  }).catch((error) => {
    console.log(error)
    return conflictResponse
  })
}

module.exports = { login, register }
