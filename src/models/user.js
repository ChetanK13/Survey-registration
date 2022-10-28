module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define("users", {
    candidate_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
  },
  name: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  mobile: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
  },
  reference: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  Remark: {
      type: DataTypes.STRING,
      allowNull: false,
  }

  })
  return User;

}
