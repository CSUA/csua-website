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

var certificate = fs.readFileSync('/etc/letsencrypt/live/www.csua.berkeley.edu/fullchain.pem');
var privateKey = fs.readFileSync('/webserver/csua-website/certs/privkey.pem');
var credentials = { key: privateKey, cert: certificate, requestCert: true };

var sslPort = 8080;
var port = 8081;

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
const sslServer = https.createServer(credentials, app);

app.all('*', function(req, res, next){
  if (req.secure) {
    return next();
  }
});

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

sslServer.listen(sslPort,
  () => console.log('Node/express SSL server started on port ' + sslPort)
);

var server = express();
server.get('*', function(req, res) {  
  res.redirect('https://' + req.hostname + ':' + sslPort);
});
server.listen(port);
