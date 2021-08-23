// Enums
const races = {
  HUMAN: 'HUMAN',
  DWARF: 'DWARF',
  ELF: 'ELF',
}

const jobs = {
  FIGHTER: 'FIGHTER',
  WIZARD: 'WIZARD',
}

// Equipment and Abilities
const weapons = [
  { name: 'Sword', attack: 3, range: 1 },
  { name: 'Bow', attack: 2, range: 3 },
  { name: 'Axe', attack: 4, range: 1 },
]

const spells = [
  { name: 'Lightning Bolt', attack: 2, range: 2 },
  { name: 'Ice Storm', attack: 2, range: 2, effect: 'Frozen' },
  { name: 'Fireball', attack: 2, range: 2 },
]

// Individual heroes
const fighters = [
  {
    id: '1',
    name: 'Arthur',
    level: 1,
    weapon: weapons.find(weapon => weapon.name === 'Sword'),
    race: races.HUMAN,
    job: jobs.FIGHTER,
    __typename: 'Fighter',
  },
  {
    id: '2',
    name: 'Gimli',
    level: 1,
    weapon: weapons.find(weapon => weapon.name === 'Axe'),
    race: races.DWARF,
    job: jobs.FIGHTER,
    __typename: 'Fighter',
  },
]

const wizards = [
  {
    id: '1',
    name: 'Merlin',
    level: 1,
    spells,
    race: races.HUMAN,
    job: jobs.WIZARD,
    __typename: 'Wizard',
  },
  {
    id: '2',
    name: 'Gandalf',
    level: 1,
    spells,
    race: races.HUMAN,
    job: jobs.WIZARD,
    __typename: 'Wizard',
  },
]

const characters = [...fighters, ...wizards]

module.exports = {
  races,
  jobs,
  weapons,
  spells,
  fighters,
  wizards,
  characters,
}
