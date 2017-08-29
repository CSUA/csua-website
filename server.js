import express from 'express';
import favicon from 'serve-favicon';
import {MongoClient, ObjectID} from 'mongodb';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

import https from 'https';

import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router';

var cert = fs.readFileSync('/webserver/csua-website/certs/cert.pem', 'utf8');
var privateKey = fs.readFileSync('/webserver/csua-website/certs/privkey.pem', 'utf8');
var credentials = { key: privateKey, cert: certificate };

global.window = {
  addEventListener: () => {},
  scrollTo: () => {}
};
global.document = {
  addEventListener: () => {}
};

var AppComponent = require('./src/App').default;


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

const app = express();
const server = https.createServer(credentials, app);
const io = require('socket.io')(server);

app.use(favicon(path.join(__dirname, 'public/static/images/logos/favicon.ico')));

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

io.on('connection', (socket) => {
  console.log('New connection.');
  socket.on('test', (data) => {
    console.log(data);
    socket.emit('testemit', {testemit: 'testemit'})
  });
});

app.listen(8080,
  () => console.log('Node/express server started on port 8080')
);
server.listen(8081,
  () => console.log('Socket.io server started on port 8081')
);
