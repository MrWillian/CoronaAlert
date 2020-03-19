const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.store = async function(req, res) {
  const { name, email, password, age, city, hasCovid } = req.body;

  const hashPassword = bcrypt.hashSync(password, 10);

  const user = await User.create({
    name, email, password: hashPassword, age, city, hasCovid
  });

  req.io.emit('newUser', res.json(user));

  return res.status(200).send();
}

exports.login = async function(req, res) {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });
  
  if (userExists) {
    if(bcrypt.compareSync(password, userExists.password)) {
      return res.status(200).send(userExists);
    } else {
      res.status(401).send();
    }
  } else {
    res.sendStatus(404);
  }
}
