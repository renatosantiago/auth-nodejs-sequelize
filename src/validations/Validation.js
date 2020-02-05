const Joi = require('@hapi/joi');

const registerValidation = Joi.object ({  
  name: Joi.string().min(3).required(),
  email: Joi.string().min(6).required(),
  password: Joi.string().min(4).required()  
})

const loginValidation = Joi.object({
  email: Joi.string().min(6).required(),
  password: Joi.string().min(4).required()
}).with('email', 'password')

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;