'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cards', [
      {
        cardFront: 'Hallo',
        cardBack: 'Hello',
        deckId: 5,
      },
      {
        cardFront: 'das Feuer',
        cardBack: 'the fire',
        deckId: 5,
      },
      {
        cardFront: 'das Wasser',
        cardBack: 'Water',
        deckId: 5,
      },
      {
        cardFront: 'der Klang',
        cardBack: 'the sound',
        deckId: 5,
      },
      {
        cardFront: 'December',
        cardBack: 'Dezember',
        deckId: 5,
      },
      {
        cardFront: 'der Wein',
        cardBack: 'the wine',
        deckId: 5,
      },
      {
        cardFront: 'das Kleid',
        cardBack: 'the dress',
        deckId: 6,
      },
      {
        cardFront: 'der Suden',
        cardBack: 'the south',
        deckId: 6,
      },
      {
        cardFront: 'die Hand',
        cardBack: 'the hand',
        deckId: 6,
      },
      {
        cardFront: 'die Wolle',
        cardBack: 'the wool',
        deckId: 6,
      },
      {
        cardFront: 'die Liebe',
        cardBack: 'the love',
        deckId: 6,
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Cards', null, {});

  }
};
