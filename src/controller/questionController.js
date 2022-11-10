/** @format */

const db = require("../models");
const { QueryTypes, Sequelize } = require("sequelize");
const sequelize = require("sequelize");
const { array } = require("joi");
const { Console } = require("console");

const Questions = db.db.questions;
const User = db.db.users;

// ------------------------>1. create Questions

const addQuestions = async (req, res) => {
  const payload = req.body;
  console.log(payload, 'checking')
  try {

    for (var i = 0; i < payload.length; i++) {
      const saveuser = await Questions.build(
        payload[i]
        );
      saveuser.save()
    }
    res
      .status(200)
      .send({ Code: "0", Message: "Created Questions", });
  } catch (error) {
    console.error(error, "error checking");
    res.status(200).send({
      Code: 1,
      Message: "Something went wrong",
      status: error,
    });
  }
};

// ---------------------->2. get all users

const getAllQuestions = async (req, res) => {
  let users = await Questions.findAll({ include: [User] });
  res.status(200).send({ Message: "Data Fetched Successfully", users });
};

// ------------------->3. get single Questions

const getQuestionByUserId = async (req, res) => {
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
  const questions = await Questions.update(req.body, {
    where: { uuid: id["uuid"] },
  });
  console.log(questions, "userrrrrrrrrrrrr");

  res.status(200).send({ Code: 1, Message: "Updated sucessfully" });
};

module.exports = {
  addQuestions,
  getAllQuestions,
  getQuestionByUserId,
  updateQuestionsById,
};
