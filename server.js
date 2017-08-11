const express = require('express');
const favicon = require('serve-favicon');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const path = require('path');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// app.get('/bundle.js', (req, res, next) => {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   res.set('Content-Type', 'application/javascript');
//   next();
// });

app.use(express.static('public'));
app.use(favicon(path.join(__dirname, 'public/static/images/logos/favicon.ico')));

app.get('*', (req, res, next) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('New connection.');
  socket.on('test', (data) => {
    console.log(data);
    socket.emit('testemit', {testemit: 'testemit'})
  });
});

app.listen(3002,
  () => console.log('Node/express server started on port 3002')
);
server.listen(3003,
  () => console.log('Socket.io server started on port 3003')
);
