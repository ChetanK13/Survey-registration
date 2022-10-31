/** @format */

const db = require("../models");
// const { candidateValidation } = require("../validation/validate")

const User = db.db.questions;

// ------------------------>1. create user

const addQuestions = async (req, res) => {
  const payload = req.body;
  try {
    // console.log(playLoad , 'checking')
    const saveuser = await User.build(payload);

    saveuser.save();
    res
      .status(200)
      .send({ Code: "0", Message: "Created User", user_data: saveuser });
  } catch (error) {
    console.error(error);
  }
};

// ---------------------->2. get all users

const getAllQuestions = async (req, res) => {
  let users = await User.findAll({});
  res.status(200).send(users);
  console.log(users);
};

// ------------------->3. get single user

const getQuestionByUserId = async (req, res) => {
    let id = req.params;
    //   console.log(id, "entire object");
//   console.log(id["uuid"], "only id");

 let user = await User.findOne( req.params, { where: { userUuid: id["userUuid"] } });
 
  console.log(user, "checking");
  res.status(200).send(user);
};

//--------------------> 4. update User

const updateQuestionsById = async (req, res) => {
  let id = req.params;
  console.log(id);
  const user = await User.update(req.body, { where: { uuid: id["uuid"] } });
  console.log(user, "userrrrrrrrrrrrrrrrr");

  res.status(200).send(user);
};

module.exports = {
  addQuestions,
  getAllQuestions,
  getQuestionByUserId,
  updateQuestionsById,
};
