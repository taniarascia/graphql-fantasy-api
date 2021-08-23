# Outline

GraphQL Fantasy API

## An Overview of GraphQL

- What is GraphQL?
- GraphQL vs. REST
- GraphQL server and client
- Important Concepts and Terminology
  - Schema
  - Resolvers
  - Types
  - Queries
  - Mutations

## Setting up a GraphQL API Server and Client (Node)

Tutorial walkthrough.

- Server
  - Create a simple back end (Node/Express) that returns a single `/graphql` endpoint
  - Using "in memory" data store to avoid overhead of databases
  - Using Node 16/module type to avoid overhead of webpack
- Client
  - Create a simple front end (vanilla JS? React?) that queries the `/graphql` endpoint
- GraphiQL
  -Using GraphiQL for local development testing

## Creating a GraphQL Schema

Using Fantasy/RPG data for example schema. Build it into the graphQL server above.

- Type System
  - GraphQL Object Type (`type`, fields (properties))
  - Scalar Type (aka primitives, `String`, `Int`, `Boolean`, `Float`)
  - Enumeration (`enum`)
  - Interface/Union Type (`interface`, `|` (union))
  - Type Modifiers (`!` (non-nullable) and `[]` (list))
  - Entrypoint (Operation) Types (`Query` and `Mutation`)
  - Comments/description (`""`)

## Using GraphQL Queries, Mutations, and Resolvers

- Queries (read)
  - Simple query (no name)
  - Operation names (`query`)
  - Aliases
  - Arguments
    - hard-coded
    - query parameter
    - directives
  - Fragments (`fragment` and `...`)
- Mutations (write)
  - Input Types (`input`)
- Resolvers
  - Resolver functions
  - `resolveType`
  - Context

## Additional Information

- Pagination: Connections Pattern - Edges and Nodes
- Introspection (`__schema`, `__type`, `name`, `kind`, `ofType`)
