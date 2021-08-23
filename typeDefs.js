const typeDefs = `
  "The job class of the character."
  enum Job {
    FIGHTER
    WIZARD
  }

  "The species or ancestry of the character."
  enum Race {
    HUMAN
    ELF
    DWARF
  }
  
  "A valiant weapon wielded by a fighter."
  type Weapon {
    name: String!
    attack: Int
    range: Int
  }
  
  "A powerful spell that a wizard can read from a scroll."
  type Spell {
    name: String!
    attack: Int
    range: Int
    effect: String
  }
  
  "A hero on a quest."
  interface Character {
    id: ID!
    name: String!
    level: Int!
    race: Race
    job: Job
  }

  "A hero with direct combat ability and strength."
  type Fighter implements Character {
    id: ID!
    name: String!
    level: Int!
    race: Race
    job: Job!
    weapon: Weapon
  }
  
  "A hero with a variety of magical powers."
  type Wizard implements Character {
    id: ID!
    name: String!
    level: Int!
    race: Race
    job: Job!
    spells: [Spell]
  }

  input CharacterInput {
    name: String!
    race: Race
    job: Job
  }

  union CharacterType = Wizard | Fighter

  type Mutation {
    addCharacter(input: CharacterInput): CharacterType
  }

  type Query {
    fighters: [Fighter]
    fighter(id: ID!): Fighter
    wizards: [Wizard]
    wizard(id: ID!): Wizard
    characters: [CharacterType]
  }
`

module.exports = { typeDefs }
