const router = require('express').Router()
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const IndexResolver = require('../resolvers/index')
const schema = buildSchema(`
  type Query {
    test: String
    transaction: Transaction
  }
  type Transaction {
   test: String
  }

`)

const rootValue = {
  test () {
    return 'wads'
  },
  transaction: new IndexResolver(),
}

router.use(
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
)

module.exports = router
