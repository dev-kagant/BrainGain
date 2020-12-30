'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        category: "Mathamatics"
      },
      {
        category: "Science"
      },
      {
        category: "Entrance Exams"
      },
      {
        category: "Professional Certifications"
      },
      {
        category: "Foreign Languages"
      },
      {
        category: "Medical & Nursing"
      },
      {
        category: "Health & Fitness"
      },
      {
        category: "Business Finance"
      },
      {
        category: "Technology & Engineering"
      },
      {
        category: "Food & Beverage"
      },
      {
        category: "Fine Arts"
      },
      {
        category: "Vocations"
      },
      {
        category: "English"
      },
      {
        category: "Law"
      },
      {
        category: "Humanities & Social Studies"
      },
      {
        category: "Random Knowledge"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
