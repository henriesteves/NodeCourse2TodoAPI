const { MongoClient, ObjectID } = require('mongodb')

const url = 'mongodb://localhost:27017'
const dbName = 'TodoApp'

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }

  console.log('Connected to MongoDB server')

  const db = client.db(dbName)

  // findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b889c4b32552528ac60d3b0')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   // returnOriginal: true // default returns the original doc
  //   returnOriginal: false // returns updated doc
  // }).then(result => {
  //   console.log(result) // doc
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b888ce035e90f44b4851ecf')
  }, {
    $set: {
      name: 'Lola Esteves'
    },
    $inc: {
      age: -1
    }
  }, {
    returnOriginal: false
  }).then(result => {
    console.log(result) // doc
  })

  client.close(err, () => {
    console.log('The connection to the server was closed')
  })

})