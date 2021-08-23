const resolvers = {
  Query: {
    fighter: (obj, { id }, context) => context.fighters.find(fighter => fighter.id === id),
    fighters: (obj, args, context) => context.fighters,
    wizard: (obj, { id }, context) => context.wizards.find(wizard => wizard.id === id),
    wizards: (obj, args, context) => context.wizards,
    characters: (obj, args, context) => context.characters,
  },

  Mutation: {
    addCharacter: (obj, { input }, context) => {
      const newCharacter = {
        id: Math.floor(Math.random() * 100).toString(),
        ...input,
        level: 1,
      }

      if (input.job === 'FIGHTER') {
        context.fighters.push(newCharacter)
      }

      if (input.job === 'WIZARD') {
        context.wizards.push({ ...newCharacter, spells: [] })
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
