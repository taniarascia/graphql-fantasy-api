const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

// The root provides a resolver function for each API endpoint
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  '/graphql',
  graphqlHTTP({
    schema: executableSchema,
    graphiql: true,
  })
)

app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql')
})
