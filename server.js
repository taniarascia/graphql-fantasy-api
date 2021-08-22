import express from 'express'
import expressGraphQL from 'express-graphql'
import graphQL from 'graphql'

import { rawSchema } from './rawSchema.js'
import * as data from './data.js'

const schema = graphQL.buildSchema(rawSchema)

const resolvers = {
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
  expressGraphQL.graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
)

app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql')
})
