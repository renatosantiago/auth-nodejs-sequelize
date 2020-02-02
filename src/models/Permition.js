const { Model, DataTypes } = require('sequelize');

class Permition extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,            
    }, {
      sequelize,
      tableName: 'permition',
      underscored: true
    })
  }

  static associate(models) {
    this.belongsToMany(models.User, { foreignKey: 'id_permition', through: 'user_permition', as: 'users'});
  }  
}


module.exports = Permition;