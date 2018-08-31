// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

const url = 'mongodb://localhost:27017'
const dbName = 'TodoApp'

// const obj = new ObjectID()
// console.log(obj) // 5b888e692df58b20e4f4a5a6

// const user = { name: 'Lola Esteves', age: 8 }
// const { name } = user
// console.log(name) // "Lola Esteves"

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }

  console.log('Connected to MongoDB server')

  const db = client.db(dbName)

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err)
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  // db.collection('Users').insertOne({
  //   // _id: 123, // Sobrepõe o _id padrão
  //   name: 'Henrique Esteves',
  //   age: 37,
  //   location: 'Brazil'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err)
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  //   console.log(JSON.stringify(result.ops[0]._id, undefined, 2)) // "5b888ce035e90f44b4851ecf"
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2)) // "2018-08-31T00:33:36.000Z"
  // })

  client.close(err, () => {
    console.log('The connection to the server was closed')
  })
})
