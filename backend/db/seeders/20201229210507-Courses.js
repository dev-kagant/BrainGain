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
        subCategoryId: 18,
      },
      {
        name: "Art History",
        description: "Something to describe for the course",
        creatorId: 1,
        subCategoryId: 116,
      },
      {
        name: "Mode",
        description: "Something to describe for the course",
        creatorId: 4,
        subCategoryId: 95,
      },
      {
        name: "Fashion thru History",
        description: "Something to describe for the course",
        creatorId: 4,
        subCategoryId: 95,
      },
      {
        name: "German",
        description: "Something to describe for the course",
        creatorId: 5,
        subCategoryId: 58,
      },
      {
        name: "Italian",
        description: "Something to describe for the course",
        creatorId: 5,
        subCategoryId: 60,
      },
      {
        name: "Korean",
        description: "Something to describe for the course",
        creatorId: 5,
        subCategoryId: 62,
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Courses', null, {});

  }
};
