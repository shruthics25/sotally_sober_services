'use strict'

const Hapi = require('@hapi/hapi')
const Inert = require('@hapi/inert')
const Vision = require('@hapi/vision')
const HapiSwagger = require('hapi-swagger')
const routes = require('./routes')
const Path = require('path')

const server = Hapi.server({
  port: process.env.PORT || 3000,
  host: '0.0.0.0',
  routes: {
    files: {
      relativeTo: Path.join(__dirname, 'images')
    }
  }
})

const init = () => {
  return server
}
const start = async () => {
  const swaggerOptions = {
    info: {
      title: 'Test API Documentation',
      version: '1.0'
    }
  }

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    }
  ])

  server.route(routes)

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

start()

module.exports = { init }
