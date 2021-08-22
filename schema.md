# Schema

```gql
enum Race {
  HUMAN
  ELF
  DWARF
}

enum Job {
  FIGHTER
  RANGER
  CLERIC
  WIZARD
}

type Weapon {
  name: String!
  attack: Int
  range: Int
}

type Spell {
  name: String!
  range: Int
  effect: String
}

interface Character {
  id: ID!
  name: String!
  level: Int!
  job: Job
}

type Fighter implements Character {
  id: ID!
  name: String!
  level: Int!
  job: Job
  weapon: Weapon
}

type Wizard implements Character {
  id: ID!
  name: String!
  level: Int!
  job: Job
  spells: [Spell]
}
```
