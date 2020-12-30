'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Courses', [
      {
        name: "Chemistry",
        description: "Something to describe for the course",
        creatorId: 1,
        subCategoryId: 2,
      },
      {
        name: "Geometry",
        description: "Something to describe for the course",
        creatorId: 1,
        subCategoryId: 1,
      },
      {
        name: "Art History",
        description: "Something to describe for the course",
        creatorId: 1,
        subCategoryId: 11,
      },
      {
        name: "Mode",
        description: "Something to describe for the course",
        creatorId: 4,
        subCategoryId: 94,
      },
      {
        name: "Fashion thru History",
        description: "Something to describe for the course",
        creatorId: 4,
        subCategoryId: 94,
      },
      {
        name: "German",
        description: "Something to describe for the course",
        creatorId: 5,
        subCategoryId: 57,
      },
      {
        name: "Italian",
        description: "Something to describe for the course",
        creatorId: 5,
        subCategoryId: 59,
      },
      {
        name: "Korean",
        description: "Something to describe for the course",
        creatorId: 5,
        subCategoryId: 61,
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Courses', null, {});

  }
};
