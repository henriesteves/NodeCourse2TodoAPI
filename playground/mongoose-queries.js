const { ObjectID } = require('mongodb')
const { mongoose } = require('./../server/db/mongoose')

const { Todo } = require('./../server/models/Todo')
const { User } = require('./../server/models/User')

// const id = '5b8acd6cf9993167c84befb91'
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({ _id: id })
//   .then(todos => {
//     console.log('Todos', todos)
//   })
//
// Todo.findOne({ _id: id })
//   .then(todo => {
//     console.log('Todo', todo)
//   })

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('Id not found')
//     }
//     console.log('Todo By Id', todo)
//   }).catch(e => console.log(e))


const userID = '5b89ddf4d08bf829c8c74944'

User.findById(userID)
  .then(user => {
    if (!user) {
      return console.log('Unable to find user')
    }
    console.log('User', user)
  })
  .catch(e => console.log(e))
