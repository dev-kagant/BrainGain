'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserCourses', [
      {
        courseId: 1,
        creatorId: 1,
      },
      {
        courseId: 2,
        creatorId: 1,
      },
      {
        courseId: 3,
        creatorId: 1,
      },
      {
        courseId: 4,
        creatorId: 1,
      },
      {
        courseId: 5,
        creatorId: 1,
      },
      {
        courseId: 6,
        creatorId: 1,
      },
      {
        courseId: 7,
        creatorId: 1,
      },
      {
        courseId: 8,
        creatorId: 1,
      },
      {
        courseId: 1,
        creatorId: 4,
      },
      {
        courseId: 2,
        creatorId: 4,
      },
      {
        courseId: 3,
        creatorId: 4,
      },
      {
        courseId: 4,
        creatorId: 4,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserCourses', null, {});
  }
};
