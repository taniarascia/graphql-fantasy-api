const typeDefs = `
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
    race: Race
  }
  
  type Fighter implements Character {
    id: ID!
    name: String!
    level: Int!
    job: Job
    race: Race
    weapon: Weapon
  }
  
  type Wizard implements Character {
    id: ID!
    name: String!
    level: Int!
    job: Job
    race: Race
    spells: [Spell]
  }

  type Query {
    fighters: [Fighter]
    fighter(id: ID!): Fighter
    wizards: [Wizard]
    wizard(id: ID!): Wizard
    characters: [Character]
  }
`

module.exports = { typeDefs }
