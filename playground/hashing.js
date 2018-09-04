const { SHA256 } = require('crypto-js')

// const message = 'I am user mumber 3'
//
// const hash = SHA256(message).toString()
//
// console.log(`Message: ${message}`)
// console.log(`Hash: ${hash}`)

// const data = {
//   id: 4,
// }
// const token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// // token.data.id = 5
// // token.hash = SHA256(JSON.stringify(token.data)).toString()
//
// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()
// if (resultHash === token.hash) {
//   console.log('Data was not changed.')
// } else {
//   console.log('Data was changed. Do not trust!')
// }

// https://jwt.io
const jwt = require('jsonwebtoken')

const data = {
  id: 10
}

const token = jwt.sign(data, '123456')
console.log('token', token)
// token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTUzNjAyNDE3NH0.HXdpiLu223xckRgcNNt2bPlrinH_Z5fOlblHGPJG614

const decoded = jwt.verify(token, '123456')
console.log('decoded', decoded)
// decoded { id: 10, iat: 1536024138 }

