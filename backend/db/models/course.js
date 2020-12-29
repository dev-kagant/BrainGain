'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    creatorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User'
      }
    },
    subCategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'SubCategory'
      }
    }
  }, {});
  Course.associate = function (models) {
    // associations can be defined here
  };
  return Course;
};
