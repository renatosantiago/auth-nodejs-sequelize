const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthDao = require('../database/dao/AuthDAO');

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
      permitions: user.permitions
    }, 'token_secret');

    return token;
  }
}