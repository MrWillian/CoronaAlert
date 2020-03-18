const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
  async store(req, res) {
    const { name, email, password, age, country, hasCovid } = req.body;

    const hashPassword = bcrypt.hashSync(password, 10);

    const user = await User.create({
      name, email, password: hashPassword, age, country, hasCovid
    });

    req.io.emit('newUser', res.json(user));

    return res.status(200).send();
  },

  async login(req, res) {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });
    
    if (userExists) {
      if(bcrypt.compareSync(password, userExists.password)) {
        return res.json(userExists);
      } else {
        return res.json('unauthorized');
      }
    } else {
      return res.json("user doesn't exist");
    }
  }
}
