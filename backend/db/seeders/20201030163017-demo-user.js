'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'Bethany',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'Summer',
        hashedPassword: bcrypt.hashSync('summer'),
      },
      {
        email: faker.internet.email(),
        username: 'Tony',
        hashedPassword: bcrypt.hashSync('cousin'),
      },
      {
        email: faker.internet.email(),
        username: 'Jamal',
        hashedPassword: bcrypt.hashSync('cousin'),
      },
      {
        email: faker.internet.email(),
        username: 'Edna',
        hashedPassword: bcrypt.hashSync('auntie'),
      },
      {
        email: faker.internet.email(),
        username: 'Patrica',
        hashedPassword: bcrypt.hashSync('grandma'),
      },
      {
        email: faker.internet.email(),
        username: 'Baby Esther',
        hashedPassword: bcrypt.hashSync('bettyboop'),
      },
      {
        email: faker.internet.email(),
        username: 'Tinkerbell',
        hashedPassword: bcrypt.hashSync('peterpan'),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {});
  }
};
