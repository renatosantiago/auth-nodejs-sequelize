const jwt = require('jsonwebtoken');

module.exports = function(request, response, next) {
  const token = request.header('auth-token');
  if(!token) {
    return response.status(401).send('Unauthorized! you need a access token');
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    request.check_token = verified;
    next();
  } catch (error) {
    response.status(400).send('Invalid token');
  }
}