const User = require('../models/User');

module.exports = {
  async store(req, res) {
    console.log(req);
    const { name, avatar, age } = req.body;

    const user = await User.create({
      name, avatar, age, country
    });

    req.io.emit('newUser', res.json(user));

    return res.status(200).send();
  }
}
