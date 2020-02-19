const notFoundResponse = {
  statusCode: 404,
  error: 'Not Found',
  message: 'Not found'
}
const badRequestResponse = {
  statusCode: 400,
  error: 'Bad Request',
  message: 'Invalid request input'
}

const conflictResponse = {
  statusCode: 409,
  error: 'Conflict',
  message: 'Conflict request input'
}

const successResponse = {
  statusCode: 200,
  error: 'Success',
  message: 'Action is Successfull',
  result: []
}

const unauthorizedResponse = {
  statusCode: 401,
  error: 'UnAuthorized',
  message: 'Invalid Credentials'
}

module.exports = { notFoundResponse, badRequestResponse, conflictResponse, successResponse, unauthorizedResponse }
