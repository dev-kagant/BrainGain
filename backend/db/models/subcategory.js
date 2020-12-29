'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubCategory = sequelize.define('SubCategory', {
    subCategory: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Category'
      }
    },
  }, {});
  SubCategory.associate = function (models) {
    // associations can be defined here
  };
  return SubCategory;
};
