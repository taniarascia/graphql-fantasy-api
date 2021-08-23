const express = require('express')
const graphQL = require('graphql')
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const data = require('./data.js')
const { typeDefs } = require('./typeDefs.js')
const { resolvers } = require('./resolvers.js')

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  '/graphql',
  graphqlHTTP({
    schema: executableSchema,
    context: data,
    graphiql: true,
  })
)

app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql')
})
