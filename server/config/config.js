const env = process.env.NODE_ENV || 'development'
const dbUrl = 'mongodb://localhost'
const dbPort = 27017

if (env === 'development') {
  const dbName = 'TodoApp'

  process.env.MONGODB_URI = `${dbUrl}:${dbPort}/${dbName}`
  console.log(process.env.MONGODB_URI)
  process.env.PORT = 3000
} else if (env === 'test') {
  const dbName = 'TodoAppTest'

  process.env.MONGODB_URI = `${dbUrl}:${dbPort}/${dbName}`
  process.env.PORT = 3000
}

// if (env === 'development') {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
// } else if (env === 'test') {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
// }