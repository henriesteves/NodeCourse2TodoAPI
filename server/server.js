const express = require('express')
const bodyParser = require('body-parser')

const { mongoose } = require('./db/mongoose')

const { Todo } = require('./models/Todo')
const { User } = require('./models/User')

const app = express()

const port = 3000

app.use(bodyParser.json())

// POST /todos
app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  })

  todo.save()
    .then(doc => {
      res.send(doc)
    }, e => {
      res.status(400)
      res.send(e)
    })
})

// GET /todos
app.get('/todos', (req, res) => {
  Todo.find()
    .then(todos => {
      res.send({ todos })
    }, e => {
      res.send(400)
      res.send(e)
    })
})

// GET /todos/:id

// DELETE /todos/:id

// PATCH /todos/:id

app.listen(port, () => {
  console.log(`Started on port ${port}`)
})

module.exports = { app }
