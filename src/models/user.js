module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define("users", {
    uuid: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true
    },
   
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Date: {
      type: DataTypes.DATE
    },
    Qus1: {
      type: DataTypes.STRING
    },
    Qus2: {
      type: DataTypes.STRING
    },
    Qus3: {
      type: DataTypes.STRING
    },
    Qus4: {
      type: DataTypes.STRING
    },

  })
  return User;

}
