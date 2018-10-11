const env = process.env.NODE_ENV || 'development'

if (env === 'development' || env === 'test') {
  const config = require('./config.json')
  const envConfig = config[env]

  // console.log(Object.keys(envConfig)) // [ 'PORT', 'MONGODB_URI' ]

  Object.keys(envConfig).forEach(key => {
    process.env[key] =  envConfig[key]
  })
}

// Heroku commands
// heroku config
// heroku config:set NAME=Henrique
// heroku config
// heroku config:get NAME
// heroku config:unset NAME
// heroku config
// heroku config:set JWT_SECRET=SECRET
// heroku config

// const dbUrl = 'mongodb://localhost'
// const dbPort = 27017
//
// if (env === 'development') {
//   const dbName = 'TodoApp'
//
//   process.env.MONGODB_URI = `${dbUrl}:${dbPort}/${dbName}`
//   console.log(process.env.MONGODB_URI)
//   process.env.PORT = 3000
// } else if (env === 'test') {
//   const dbName = 'TodoAppTest'
//
//   process.env.MONGODB_URI = `${dbUrl}:${dbPort}/${dbName}`
//   process.env.PORT = 3000
// }

// if (env === 'development') {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
// } else if (env === 'test') {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
// }