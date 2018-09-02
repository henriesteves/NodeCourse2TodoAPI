const { ObjectID } = require('mongodb')
const { mongoose } = require('./../server/db/mongoose')

const { Todo } = require('./../server/models/Todo')
const { User } = require('./../server/models/User')

// Todo.remove({})
//   .then(result => {
//     console.log(result)
//   })

Todo.findOneAndRemove({ _id: '5b8b3227be7b925d4406d025' })
  .then(todo => {
    console.log(todo)
  })

// Todo.findByIdAndRemove('5b8b31ae9e9a635f682c9ef0')
//   .then(todo => {
//     console.log(todo)
//   })
