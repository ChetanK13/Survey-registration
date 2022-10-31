/** @format */

module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define("question", {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    Qus1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Qus2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Qus3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Qus4: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userUuid: {
        type: DataTypes.STRING,
        allowNull: false,
      },

  });
  return Questions;
};
