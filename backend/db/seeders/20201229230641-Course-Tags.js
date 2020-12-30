'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CourseTags', [
      {
        tagId: 5,
        courseId: 1
      },
      {
        tagId: 4,
        courseId: 2
      },
      {
        tagId: 8,
        courseId: 3
      },
      {
        tagId: 19,
        courseId: 3
      },
      {
        tagId: 1,
        courseId: 6
      },
      {
        tagId: 2,
        courseId: 6
      },
      {
        tagId: 8,
        courseId: 6
      },
      {
        tagId: 20,
        courseId: 5
      },
      {
        tagId: 21,
        courseId: 5
      },
      {
        tagId: 22,
        courseId: 5
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CourseTags', null, {});
  }
};
