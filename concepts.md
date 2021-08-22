# GraphQL Server

https://www.moesif.com/blog/technical/graphql/Generating-Rest-APIs-from-GraphQl-Schemas/

- Setting up a basic GraphQL server
- Setting up a basic GraphQL client

# Main Concepts

- Queries
- Mutations
- Schemas
- Types
  - type modifiers (list `[]`, non-null `!`)

Queries and mutations are the entrypoint

https://github.com/graphql/graphql-spec/blob/main/README.md

GraphQL is:

- A query language for APIs, created by Facebook.

GraphQL consists of:

- A type system
- Query syntax
- Static validation
- Type introspection

## Type System

- Scalar (primitive

(If scalar, doesn't need more fields, if not scalar, needs more fields)

Use **schema to find the schema, or **type to get the type.

### Keywords

- `interface`
- `type`
- `enum`

## Entrypoint

```gql
type Query {
  fighter(id: String!): Fighter
  wizard(id: String!): Wizard
}
```

Three top-level operations:

- Returns the fighter with that id
- Returns the wizard with that id

## Query Syntax

Fetch all wizards

```gql
query WizardNameQuery {
  wizard {
    name
  }
}
```

Fetch all wizards with their weapons

```gql
query WizardNameAndWeaponQuery {
  hero {
    id
    name
    weapons {
      name
    }
  }
}
```

Fetch a specific wizard, hardcoded

```gql
query FetchMerlinQuery {
  wizard(id: 1) {
    name
  }
}
```

Fetch a specific wizard by query parameter

```gql
query FetchSomeWizard($wizardId: Number!) {
  wizard(id: $wizardId) {
    name
  }
}
```

Add an alias

```gql
query FetchWizardAliased {
  merlin: wizard(id: 1) {
    name
  }
  gandalf: wizard(id: 2) {
    name
  }
}
```

## Fragments


Using buildSchema is generally inadvisable, as it severely limits the functionality of your schema.

A schema generated using buildSchema:

Cannot specify resolve functions for individual fields
Cannot specify either resolveType or isTypeOf properties for Types, making it impossible to use Unions and Interfaces
Cannot utilize custom scalars