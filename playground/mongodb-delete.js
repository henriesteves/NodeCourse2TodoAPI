const { MongoClient, ObjectID } = require('mongodb')

const url = 'mongodb://localhost:27017'
const dbName = 'TodoApp'

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }

  console.log('Connected to MongoDB server')

  const db = client.db(dbName)

  // deleteMany
  // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then(results => {
  //   console.log(results) // Object
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then(results => {
  //   console.log(results) // Object
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({ completed: false }).then(result => {
  //   console.log(result) // doc
  // })

  // db.collection('Users').deleteMany({ name: 'Henrique Esteves 2' }).then(results => {
  //   console.log(results) // Object
  // })

  // db.collection('Users').findOneAndDelete({ _id: new ObjectID('5b888bc768481152a869ae80') }).then(result => {
  //   console.log(result) // doc
  // })

  client.close(err, () => {
    console.log('The connection to the server was closed')
  })
})