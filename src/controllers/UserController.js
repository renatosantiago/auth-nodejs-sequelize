const User = require('../models/User');
const bcrypt = require('bcryptjs');


module.exports = {
  async index(request, response) {
    const user = await User.findAll();
    return response.json(user);
  },


  async store(request, response) {
    // const { name, email, passord} = request.body;
  
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(request.body.password, salt);
    request.body.password = hashPassword;  
    
    try {
      const user = await User.create(request.body);
      return response.json(user);
    } catch (error) {
      return response.status(400).send(error);
    }
  
  }

}





