const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const { typeDefs } = require('./typeDefs')
const data = require('./data')

// Construct a schema, using GraphQL schema language
const schema = buildSchema(typeDefs)

// The root provides a resolver function for each API endpoint
const rootValue = {
  fighter: ({ id }) => data.fighters.find(fighter => fighter.id === id),
  fighters: () => data.fighters,
  wizard: ({ id }) => data.wizards.find(wizard => wizard.id === id),
  wizards: () => data.wizards,
  characters: () => data.characters,
}

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
)

app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql')
})
