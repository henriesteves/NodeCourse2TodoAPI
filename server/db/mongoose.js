const mongoose = require('mongoose')

const dbUrl = 'mongodb://localhost'
const dbPort = '27017'
const dbName = 'TodoApp'

mongoose.connect(`${dbUrl}:${dbPort}/${dbName}`, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log(`MongoDB is running at port ${dbPort}`)
})

module.exports = {
  mongoose
}
