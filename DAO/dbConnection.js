const Mongoose = require('mongoose')
const db = Mongoose.connect('mongodb+srv://shruthics:Spur2Win@cluster0-zhm5x.mongodb.net/sotallytoberDB?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true })
const Schema = Mongoose.Schema
Mongoose.set('useCreateIndex', true)
Mongoose.set('debug', true)

const dbconnection = Mongoose.connection
dbconnection.on('error', console.error.bind(console, 'connection error'))
dbconnection.once('open', function callback () {
  console.log('Connection with database succeeded!!! Yayyy!!')
})

module.exports = { db, Schema, Mongoose }
