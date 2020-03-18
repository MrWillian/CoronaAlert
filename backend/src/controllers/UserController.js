const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { name, email, password, age, country, hasCovid } = req.body;

    const user = await User.create({
      name, email, password, age, country, hasCovid
    });

    req.io.emit('newUser', res.json(user));

    return res.status(200).send();
  },

  async login(req, res) {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email, password });
    
    if (userExists)
      return res.json(userExists);
    
    return res.json('unauthorized');
  }
}
