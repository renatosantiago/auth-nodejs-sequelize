const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      sequelize,
      tableName: 'user',
      underscored: true
    })
  }

  static associate(models) {
    this.belongsToMany(models.Permission, { foreignKey: 'id_user', through: 'user_permission', as: 'permissions' });
  }
}

module.exports = User;