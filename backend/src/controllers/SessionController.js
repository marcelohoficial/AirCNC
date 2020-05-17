const User = require('../models/User');

//index, show, store, update, destroy
//index = Listagem de sessões
//show = Lista apenas uma sessão
//store = Cria uma sessão
//update = Altera uma sessão
//destroy = Elimina a sessão

module.exports = {
  async store(req, res){
    const { email } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email })        
    }

    return res.json(user);
  }
};