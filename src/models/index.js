/** @format */

const dbConfig = require("../config/db.config");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected to Database..");
  })
  .catch((err) => {
    console.log("Unable to connect" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.js")(sequelize, DataTypes);

db.questions = require("./question")(sequelize, DataTypes);

//relationin qustions
db.users.hasMany(db.questions);
db.questions.belongsTo(db.users);

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done");
});
module.exports.db = db;
