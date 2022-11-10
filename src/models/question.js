/** @format */

module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define("question", {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    Reference: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Phone_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Consent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    // userUuid: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //   },

  });
  return Questions;
};
