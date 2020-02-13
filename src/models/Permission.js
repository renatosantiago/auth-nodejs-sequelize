const { Model, DataTypes } = require('sequelize');

class Permission extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,            
    }, {
      sequelize,
      tableName: 'permission',
      underscored: true
    })
  }

  static associate(models) {
    this.belongsToMany(models.User, { foreignKey: 'id_permission', through: 'user_permission', as: 'users'});
  }  
}


module.exports = Permission;