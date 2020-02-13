const Permission = require('../models/Permission');
module.exports = {

  async store(request, response) {
    const data = request.body;

    const permission = await Permission.create(data);
    return response.json(permission);
  }
}