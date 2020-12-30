'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Decks', [
      {
        deckName: 'Periodic Table: All of the element currently found within the period table',
        courseId: 1,
        creatorId: 1,
      },
      {
        deckName: 'Shapes: Naming all the types of shapes',
        courseId: 2,
        creatorId: 1,
      },
      {
        deckName: 'Moda: Fashion Houses in Italy: Learn all of the popular fashion houses within the country of Italy',
        courseId: 4,
        creatorId: 4,
      },
      {
        deckName: "1950s: Clothing styles of the 1950's",
        courseId: 5,
        creatorId: 4,
      },
      {
        deckName: 'German Vocab 1: 200 vocabulary words to get you started learning German words',
        courseId: 6,
        creatorId: 5,
      },
      {
        deckName: 'German Vocab 2: 200 vocabulary words to get you started learning German words',
        courseId: 6,
        creatorId: 5,
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Decks', null, {});
  }
};
