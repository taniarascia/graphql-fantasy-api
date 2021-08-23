const data = require('./data.js')

const resolvers = {
  Query: {
    fighter: (_, { id }) => data.fighters.find(fighter => fighter.id === id),
    fighters: () => data.fighters,
    wizard: (_, { id }) => data.wizards.find(wizard => wizard.id === id),
    wizards: () => data.wizards,
    characters: () => data.characters,
  },

  Mutation: {
    addCharacter: (_, { input }) => {
      const newCharacter = {
        id: Math.floor(Math.random() * 100).toString(),
        ...input,
        level: 1,
      }

      if (input.job === 'FIGHTER') {
        data.fighters.push(newCharacter)
      }

      if (input.job === 'WIZARD') {
        data.wizards.push({ ...newCharacter, spells: [] })
      }

      return newCharacter
    },
  },

  CharacterType: {
    __resolveType: (obj, context, info) => {
      if (obj.job === 'FIGHTER') {
        return 'Fighter'
      }

      if (obj.job === 'WIZARD') {
        return 'Wizard'
      }

      return null
    },
  },
}

module.exports = { resolvers }
