/** @format */

const db = require("../models");
const { candidateValidation } = require("../validation/validate");

const User = db.db.users;

// ------------------------>1. create user

const addCandidate = async (payload, res) => {
  try {
    const saveuser = User.build({
      name: payload.body.name,
      mobile: payload.body.mobile,
      reference: payload.body.reference,
      Remark: payload.body.Remark,
    });
    const result = await candidateValidation.validateAsync(payload.body);
    
    const candidate = await saveuser.save();
    res
      .status(200)
      .send({
        Code: 0,
        Message: "User Created Successfuly",
        user_data: candidate,
      });
  } catch (error) {
    console.error(error);
    res
    .status(200)
    .send({
      Code: 1,
      Message: "Something went wrong",
      status:error
    });
  }
};

module.exports = {
  addCandidate,
};
