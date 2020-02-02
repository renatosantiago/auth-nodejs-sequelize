const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User')
const Permition = require('../models/Permition');

const connection = new Sequelize(dbConfig);

User.init(connection);
Permition.init(connection);

User.associate(connection.models);
Permition.associate(connection.models);


module.exports = connection;
