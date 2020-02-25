const { Op } = require("sequelize");
const User = require('../../models/User');
const Permission = require('../../models/Permission');


module.exports = {

  async findUserByEmail(user) {
    const result = await User.findOne({
      where: { 
        email: user.email 
      },      
      include: { 
        association: 'permissions',
        attributes: ['id', 'name'],
        required: false,
        through: {
          attributes: []
        }
      },
    });       
    return result;
    
    /* abaixo segue exemplo em raw query */
    
    // let _user = await User.sequelize.query(
    //   "select u.id, u.name, u.email, u.password from user u where u.email = :email", {
    //   replacements: { email: user.email},           
    //   type: User.sequelize.QueryTypes.SELECT
    // });
    // _user = _user[0];

    // let permissions = await Permission.sequelize.query(
    //   "select p.id, p.name from permission p" + 
    //   " join user_permission pv on pv.id_permission = p.id" +
    //   " where pv.id_user = :id", {
    //   replacements: { id: _user.id},
    //   type: Permission.sequelize.QueryTypes.SELECT
    // });

    // _user.permissions = permissions;

    // return _user;
   
  },

  async listUserByName(name) {

    /*  
    * devido ao like ser case-sensitive no mysql foi transformado para raw query
    */
    const result = await User.sequelize.query(
      "select u.id, u.name, u.email, u.created_at, u.updated_at from user u" +
      " where upper(u.name) like upper('%" + name.name + "%')", {        
        type: User.sequelize.QueryTypes.SELECT
      }
    );
    
    /*
    * abaixo segue como ficaria sem transformar para raw query, lembrando que 
    * neste caso o like seria case-sensitive
    *
    const result = await User.findAll({
      attributes: { exclude: ['password'] },
      where: {
        name: {
          [Op.like]: '%' + name.name + '%'
        }
      }
    })
    *
    */

    return result;
  }
}