const service = require('../services/AuthService')

module.exports = {
  async index(req, res) {
    res.send('Resgister index');
  },

  async login(request, response) { 
    
    const data = request.body;
    
    try {
      const token = await service.login(data);
     
      if(!token) {
        return response.status(400).send("Email ou senha incorreto");
      }
  
      return response.header('auth-token', token).send({token: token});

    } catch (error) {
      return response.send(error);
    }    
  }, 

}