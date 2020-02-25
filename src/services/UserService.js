const AuthDao = require('../database/dao/AuthDAO');

module.exports = {

  async listUserByName(name) {
    const result = await AuthDao.listUserByName(name);
    return result;
  }

}