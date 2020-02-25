const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserDAO = require('../database/dao/UserDAO');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  
  async login(data) {    
    const user = await UserDAO.findUserByEmail(data);
    
    if(!user){
      return;
    } 

    const match = await bcrypt.compare(data.password, user.password);
    if(!match){
      return;
    }

    const token = jwt.sign({
      id: user.id,
      nome: user.name,
      email: user.email,
      permissions: user.permissions,
      exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }, process.env.TOKEN_SECRET);

    return token;
  }
}