const Permition = require('../models/Permition');
module.exports = {

  async store(request, response) {
    const data = request.body;

    const permition = await Permition.create(data);
    return response.json(permition);
  }
}