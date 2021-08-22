export const jobs = {
  FIGHTER: 'FIGHTER',
  WIZARD: 'WIZARD',
  RANGER: 'RANGER',
}

export const races = {
  HUMAN: 'HUMAN',
  DWARF: 'DWARF',
  ELF: 'ELF',
}

export const weapons = [
  { name: 'Sword', attack: 3, range: 1 },
  { name: 'Bow', attack: 2, range: 3 },
]

export const spells = [
  { name: 'Lightning Bolt', attack: 2, range: 2 },
  { name: 'Ice Storm', attack: 2, range: 2 },
  { name: 'Fireball', attack: 2, range: 2 },
]

export const fighters = [
  {
    id: '1',
    name: 'Lancelot',
    level: 1,
    weapon: weapons.find(weapon => weapon.name === 'Sword'),
    race: races.HUMAN,
    job: jobs.FIGHTER,
    __typename: 'Fighter',
  },
  {
    id: '2',
    name: 'Aragorn',
    level: 1,
    weapon: weapons.find(weapon => weapon.name === 'Sword'),
    race: races.HUMAN,
    job: jobs.FIGHTER,
    __typename: 'Fighter',
  },
]

export const wizards = [
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

export const characters = [...fighters, ...wizards]
