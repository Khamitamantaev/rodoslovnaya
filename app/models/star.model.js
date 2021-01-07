module.exports = (sequelize, Sequelize) => {
  const Star = sequelize.define("stars", {
    title: {
      type: Sequelize.STRING
    },
    achievement: {
      type: Sequelize.STRING
    },
    friends: {
      type: Sequelize.STRING
    },
    positionX: {
      type: Sequelize.INTEGER
    },
    positionY: {
      type: Sequelize.INTEGER
    }
  });

  return Star;
};