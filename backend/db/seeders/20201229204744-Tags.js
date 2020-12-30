'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Tags', [
      {
        tag: 'languages'
      },
      {
        tag: 'german'
      },
      {
        tag: 'italian'
      },
      {
        tag: 'math'
      },
      {
        tag: 'science'
      },
      {
        tag: 'english'
      },
      {
        tag: 'space'
      },
      {
        tag: 'words'
      },
      {
        tag: 'medicine'
      },
      {
        tag: 'food'
      },
      {
        tag: 'care'
      },
      {
        tag: 'health'
      },
      {
        tag: 'money'
      },
      {
        tag: 'finances'
      },
      {
        tag: 'investing'
      },
      {
        tag: 'tarot'
      },
      {
        tag: 'magic'
      },
      {
        tag: 'crocheting'
      },
      {
        tag: 'art'
      },
      {
        tag: 'fashion'
      },
      {
        tag: 'clothing'
      },
      {
        tag: 'style'
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Tags', null, {});

  }
};
