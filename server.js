import express from 'express';
import favicon from 'serve-favicon';
import {MongoClient, ObjectID} from 'mongodb';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router';

global.window = {
  addEventListener: () => {}
};
global.document = {
  addEventListener: () => {}
}

function sendBase(req, res, next) {
  fs.readFile(__dirname + '/public/index.html', 'utf8', function (error, docData) {
    if (error) throw error;
     res.writeHead(200, {'Content-Type': 'text/html', 'Content-Encoding': 'gzip'});
    const AppElement = ReactDOMServer.renderToString(
                        <StaticRouter location={req.url} context={{}}>
                          <AppComponent/>
                        </StaticRouter>
                      );
    const document = docData.replace(/<div id="app"><\/div>/,`<div id="app">${AppElement}</div>`);
    zlib.gzip(document, function (_, result) {
      res.end(result);
    });
  });
}

function sendZipped(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'application/javascript');
  next();
}

var AppComponent = require('./lib/App').default;

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/bundle.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'application/javascript');
  next();
});

app.get('/bundle.css', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/css');
  next();
});

app.get('/', sendBase);

app.use(express.static('public'));

app.get('*', sendBase);


app.use(favicon(path.join(__dirname, 'public/static/images/logos/favicon.ico')));

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
