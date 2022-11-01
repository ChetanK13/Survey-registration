/** @format */

const db = require("../models");
const { QueryTypes, Sequelize } = require("sequelize");
const sequelize = require("sequelize");

const Questions = db.db.questions;
const User = db.db.users;

// ------------------------>1. create Questions

const addQuestions = async (req, res) => {
  const payload = req.body;
  try {
    // console.log(playLoad , 'checking')
    const saveuser = await Questions.build(payload);

    saveuser.save();
    res
      .status(200)
      .send({ Code: "0", Message: "Created Questions", user_data: saveuser });
  } catch (error) {
    console.error(error);
    res.status(200).send({
      Code: 1,
      Message: "Something went wrong",
      status: error,
    });
  }
};

// ---------------------->2. get all users

const getAllQuestions = async (req, res) => {
  let users = await Questions.findAll({});
  res.status(200).send({ Message: "Data Fetched Successfully", users });
};

// ------------------->3. get single Questions

const getQuestionByUserId = async (req, res) => {
  // let id = req.params;
  //   console.log(id, "entire object");
  //   console.log(id["uuid"], "only id");
  // console.log("====================api reading++==========================");
  let user = await Questions.findAll({
    where: { userUuid: req.params.userUuid },
  });
  //   console.log(user['userUuid'], "checking");
  res.status(200).send(user);
};

//--------------------> 4. update Questions

const updateQuestionsById = async (req, res) => {
  let id = req.params;
  console.log(id);
  const Questions = await User.update(req.body, {
    where: { uuid: id["uuid"] },
  });
  console.log(Questions, "userrrrrrrrrrrrrrrrr");

  res.status(200).send({ Code: 1, Message: "Updated sucessfully" });
};

module.exports = {
  addQuestions,
  getAllQuestions,
  getQuestionByUserId,
  updateQuestionsById,
};
