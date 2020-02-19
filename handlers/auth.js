const { User } = require('../models/user')
const { unauthorizedResponse, conflictResponse, successResponse } = require('./response')
const jwt = require('jsonwebtoken')

const login = async (request, h) => {
  const userdetails = request.payload
  return User.findOne({ email: userdetails.email, password: userdetails.password }).lean().then(loggedInUser => {
    let response = unauthorizedResponse
    console.log('loggedInUser', loggedInUser)
    if (loggedInUser) {
      response = { token: jwt.sign({ email: userdetails.email }, 'cartFuLL9876') }
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
