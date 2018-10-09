const { ObjectID } = require('mongodb')
const jwt = require('jsonwebtoken')

const { Todo } = require('./../../models/Todo')
const { User } = require('./../../models/User')

const userOneId = new ObjectID()
const userTwoId = new ObjectID()
const users = [{
  _id: userOneId,
  email: 'henrique@e4s.com.br',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({ _id: userOneId, access: 'auth' }, 'acb123').toString()
  }]
}, {
  _id: userTwoId,
  email: 'lola@e4s.com.br',
  password: 'userTwoPass'
}]

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo'
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 333
}]

const populateTodos = done => {
  // Todo.remove({}).then(() => done())

  Todo.remove({})
    .then(() => {
      Todo.insertMany(todos)
    })
    .then(() => done())
}

const populateUsers = done => {
  User.remove({})
    .then(() => {
      const userOne = new User(users[0]).save()
      const userTwo = new User(users[1]).save()

      return Promise.all([userOne, userTwo])
    })
    .then(() => done())
}

module.exports = { todos, populateTodos, users, populateUsers }