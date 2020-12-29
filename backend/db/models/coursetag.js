'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourseTag = sequelize.define('CourseTag', {
    tagId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag'
      },
    },
    courseId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Course'
      },
    }
  }, {});
  CourseTag.associate = function (models) {
    // associations can be defined here
  };
  return CourseTag;
};
