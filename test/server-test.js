const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')
const { afterEach, beforeEach, describe, it } = exports.lab = Lab.script()
const { init } = require('../server')
const { Mongoose } = require('../DAO/dbConnection')
describe('GET /', () => {
  let server

  beforeEach(async () => {
    server = await init()
    Mongoose.connect('mongodb+srv://shruthics:Spur2Win@cluster0-zhm5x.mongodb.net/sotallytoberDB?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true })
  })

  afterEach(async () => {
    await server.stop()
  })

  it('responds with 200,While getting Category', async () => {
    const res = await server.inject({
      method: 'post',
      url: '/login',
      payload: {
        email: 'shruthi.cs@spurtreetech.com',
        password: 'shru'
      }
    })
    expect(res.statusCode).to.equal(200)
  })
})
