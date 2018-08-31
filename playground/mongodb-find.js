const { MongoClient, ObjectID } = require('mongodb')

const url = 'mongodb://localhost:27017'
const dbName = 'TodoApp'

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }

  console.log('Connected to MongoDB server')

  const db = client.db(dbName)

  // fetch all todos
  db.collection('Todos').find().toArray().then(docs => {
    console.log('Todos')
    console.log(JSON.stringify(docs, undefined, 2))
  }, err => {
    console.log('Unable to fetch todos', err)
  })

  // fetch all completed todos
  db.collection('Todos').find({ completed: true }).toArray().then(docs => {
    console.log('Completed Todos')
    console.log(JSON.stringify(docs, undefined, 2))
  }, err => {
    console.log('Unable to fetch todos', err)
  })

  // fetch Toodo with id 5b88912905d2e228ace46c46
  db.collection('Todos').find({ _id: new ObjectID('5b88912905d2e228ace46c46') }).toArray().then(docs => {
    console.log('Todo with id 5b88912905d2e228ace46c46')
    console.log(JSON.stringify(docs, undefined, 2))
  }, err => {
    console.log('Unable to fetch todo', err)
  })

  // Count todos
  db.collection('Todos').find().count().then(count => {
    console.log(`Todos count: ${count}`)
  }, err => {
    console.log('Unable to count todos', err)
  })

  // Fetch users with name Henrique Esteves
  db.collection('Users').find({ name: 'Henrique Esteves' }).toArray().then(docs => {
    console.log('Users')
    console.log(JSON.stringify(docs, undefined, 2))
  }, err => {
    console.log('Unable to fetch todos', err)
  })

  client.close(err, () => {
    console.log('The connection to the server was closed')
  })
})
