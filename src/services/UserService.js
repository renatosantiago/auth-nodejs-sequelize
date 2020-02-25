const UserDAO = require('../database/dao/UserDAO');

module.exports = {

  async listUserByName(name) {
    const result = await UserDAO.listUserByName(name);
    return result;
  }

}