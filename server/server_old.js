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

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
})

// const newTodo = new Todo({
//   text: 'Cook dinner'
// })

// const newTodo = new Todo({
//   text: 'Walk the dog',
//   completed: false,
//   completedAt: 100
// })

// const newTodo = new Todo({
//   text: '  1   '
// })

// newTodo.save()
//   .then(doc => {
//     console.log('Saved todo', doc)
//   }, e => {
//     console.log('Unable to save todo', e)
//   })


const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
})

const newUser = new User({
  email: ' henrique@e4s.com.br '
})

newUser.save()
  .then(doc => {
    console.log('Saved user', doc)
  }, e => {
    console.log('Unable to save todo', e)
  })
