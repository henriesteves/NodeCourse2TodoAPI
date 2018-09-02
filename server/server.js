const express = require('express')
const bodyParser = require('body-parser')
const { ObjectID } = require('mongodb')

const { mongoose } = require('./db/mongoose')

const { Todo } = require('./models/Todo')
const { User } = require('./models/User')

const app = express()

const port = process.env.PORT || 3000

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
      res.sendStatus(400)
      res.send(e)
    })
})

// GET /todos
app.get('/todos', (req, res) => {
  Todo.find()
    .then(todos => {
      res.send({ todos })
    }, e => {
      res.sendStatus(400)
      res.send(e)
    })
})

// GET /todos/:id
app.get('/todos/:id', (req, res) => {
  const todoID = req.params.id

  if (!ObjectID.isValid(todoID)) {
    return res.status(404).send();
  }

  Todo.findById(todoID)
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }

      res.send({ todo })
    }, e => {
      res.status(400).send();
    })
})

// DELETE /todos/:id
app.delete('/todos/:id', (req, res) => {
  const todoID = req.params.id

  if (!ObjectID.isValid(todoID)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(todoID)
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }

      res.send({ todo })
    }, e => {
      res.status(400).send();
    })
})

// PATCH /todos/:id

app.listen(port, () => {
  console.log(`Running at port ${port}`)
})

module.exports = { app }
