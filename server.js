///////////////////////////////////////////
//  hatena-server
//  node-js port
//  pbsds x dylmye
//  v0.9.0-alpha

var config = require('./config.js');
var func = require('./functions.js');

var express = require('express');
var morgan = require('morgan');
var mkdirp = require('mkdirp');
var redbird = require('redbird');

var fs = require('fs');

/* @changelog
    ¬ v0.1-alpha - basic server design
    ¬ v0.5-alpha - proxy added
    ¬ v0.7-alpha - added logging (uses built-in bunyan) + rewriting v2-eu etc to -xx
    ¬ v0.8-alpha - added UGOXML and plaintext database
    ¬ v0.9-alpha - rewritten, adding sqlite
*/

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
    handler = require('./hatenatools-js/ugo.js'); // to do - make handler
    res.send(handler.renderToUGO(req, res));
});

var server = app.listen(config.public.port, config.public.address);

app.use(express.static(config.directory.movies));