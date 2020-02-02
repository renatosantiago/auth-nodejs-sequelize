const User = require('../../models/User');
const Permition = require('../../models/Permition');


module.exports = {

  async findUserByEmail(user) {
    const result = await User.findOne({
      where: { 
        email: user.email 
      },      
      include: { 
        association: 'permitions',
        attributes: ['id', 'name'],
        required: false,
        through: {
          attributes: []
        }
      },
    });       
    return result;
    
    // let _user = await User.sequelize.query(
    //   "select u.id, u.name, u.email, u.password from user u where u.email = :email", {
    //   replacements: { email: user.email},           
    //   type: User.sequelize.QueryTypes.SELECT
    // });
    // _user = _user[0];

    // let permitions = await Permition.sequelize.query(
    //   "select p.id, p.name from permition p" + 
    //   " join user_permition pv on pv.id_permition = p.id" +
    //   " where pv.id_user = :id", {
    //   replacements: { id: _user.id},
    //   type: Permition.sequelize.QueryTypes.SELECT
    // });

    // _user.permitions = permitions;

    // return _user;
   
  }
}