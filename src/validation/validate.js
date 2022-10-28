const Joi = require('@hapi/joi')

const candidateValidation = Joi.object({
    name:Joi.string().max(200).required(),
    mobile:Joi.string().required().max(10),
    reference:Joi.string().max(200).trim().required(),
    Remark: Joi.string().required().trim(),
})
module.exports= {candidateValidation}