const express = require('express')
const app = express()
const router = express.Router()

app.use(
  '/',
  router.get('/', function (req, res) {
    res.send(`Hello World`)
  })
)

app.use('/graphql', require('./routes/graphql'))
module.exports = app
