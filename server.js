/**********************************************************
 * HATENA-SERVER-NODEJS
 *
 * Released by dylmye
 * Port of Python version created by pbsds
 *
 * v0.9.1-alpha
 *
 * server.js - Server configuration
 */

var config = require('./config.js');
var func = require('./functions.js');

var express = require('express');
var morgan = require('morgan');
var mkdirp = require('mkdirp');
var redbird = require('redbird');

var fs = require('fs');

/**********************************
    server and log setup
**********************************/

// expressJS setup
var app = express();

// expressJS logging - verbose level
if(config.logLevel == "verbose") {
    app.use(morgan("common", {
        stream: fs.createWriteStream(config.directory.logs + func.getLogDate("morgan"),{flags: 'a'})
    }));
}
else {
    console.log("morgan disabled");
}

app.get(app.use(express.static(config.directory.content)), function expressAccess(req, res) {
  console.log("expressjs: server has finished setting up");
});

app.get(/ugo/, function(req, res) {
    res.append('X-Ridge-Dispatch', 'Hatena::UgoMemo::Engine::DS::Auth#default');
    // var handler = require('./hatenatools-js/ugo.js'); // to do - make handler
    // res.send(handler.renderToUGO(req, res));
    res.send("hey boi");
});

app.get('/ds/v2-xx/auth', function(req, res) {
    var handler = require('./auth.js'); // to do - make handler
    res.send(handler.returnAuth(false, req, res));
});

app.post('/ds/v2-xx/auth', function(req, res) {
    var handler = require('./auth.js'); // to do - make handler
    res.send(handler.returnAuth(true, req, res));
});


var server = app.listen(config.public.port, config.public.address);

app.use(express.static(config.directory.movies));