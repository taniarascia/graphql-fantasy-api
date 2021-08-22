import * as data from './data.js'

export const resolvers = {
  // Queries
  fighter: ({ id }) => data.fighters.find(fighter => fighter.id === id),
  fighters: () => data.fighters,
  wizard: ({ id }) => data.wizards.find(wizard => wizard.id === id),
  wizards: () => data.wizards,
  characters: () => data.characters,

  // Mutations
  addCharacter: ({ input }) => {
    const newCharacter = {
      id: Math.floor(Math.random() * 100).toString(),
      ...input,
    }

    if (input.job === 'FIGHTER') {
      data.fighters.push({ ...newCharacter, __typename: 'Fighter' })
    }

    if (input.job === 'WIZARD') {
      data.wizards.push({ ...newCharacter, spells: [], __typename: 'Wizard' })
    }

    return newCharacter
  },
}
