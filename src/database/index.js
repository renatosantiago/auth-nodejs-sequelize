const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User')
const Permission = require('../models/Permission');

const connection = new Sequelize(dbConfig);

User.init(connection);
Permission.init(connection);

User.associate(connection.models);
Permission.associate(connection.models);


module.exports = connection;
