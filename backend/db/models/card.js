'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    cardFront: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cardBack: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    deckId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Deck'
      }
    },
  }, {});
  Card.associate = function (models) {
    // associations can be defined here
  };
  return Card;
};
