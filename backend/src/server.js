const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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
app.use(routes);

server.listen(3333);
