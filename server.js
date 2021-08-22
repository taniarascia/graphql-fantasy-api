import express from 'express'
import expressGraphQL from 'express-graphql'
import graphQL from 'graphql'

import { rawSchema } from './rawSchema.js'
import { resolvers } from './resolvers.js'

const schema = graphQL.buildSchema(rawSchema)

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
