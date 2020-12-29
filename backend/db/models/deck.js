'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    deckName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Course'
      }
    },
    creatorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User'
      }
    },
  }, {});
  Deck.associate = function (models) {
    // associations can be defined here
  };
  return Deck;
};
