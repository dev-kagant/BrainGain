'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserCourse = sequelize.define('UserCourse', {
    creatorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User'
      }
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Course'
      }
    },
  }, {});
  UserCourse.associate = function (models) {
    // associations can be defined here
  };
  return UserCourse;
};
