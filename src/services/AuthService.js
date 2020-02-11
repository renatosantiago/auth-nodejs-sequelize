const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthDao = require('../database/dao/AuthDAO');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  
  async login(data) {    
    const user = await AuthDao.findUserByEmail(data);
    
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
      permitions: user.permitions,
      exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }, process.env.TOKEN_SECRET);

    return token;
  }
}