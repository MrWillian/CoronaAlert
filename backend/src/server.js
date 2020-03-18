const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
var bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connect', socket => {
  console.log(socket);
});

mongoose.connect('mongodb+srv://BetterWorld:1bsp1538@clusteralertapp-qwtrs.mongodb.net/alertapp?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(routes);

server.listen(3333);
