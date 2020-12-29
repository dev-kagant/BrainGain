'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    category: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
  }, {});
  Category.associate = function (models) {
    // associations can be defined here
  };
  return Category;
};
