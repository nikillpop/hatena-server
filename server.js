// hatena-server-nodejs
// original - pbsds (sha-2 23e198ccf068539a2fc374bc2f8571a36d057d29)
// ported   - dylmye (v0.5-alpha)

// @requires:
//    ¬ nodeJS (server provider)
//    ¬ expressJS (server)
//    ¬ redbird (proxy)

// changelog
//    ¬ v0.1-alpha - basic server design
//    ¬ v0.5-alpha - proxy added
// NO UGO WORKING == NOT REALLY WORKING

// DEPENDENCIES
var express = require('express');
    redbird = require('redbird')({port: 8080});

// EDIT THESE
var port = 3000; // change to whatever
var silrun = 0; // if 1, no logging happens
var workDir = "./hatenadir/"; // where files are served

// REST OF THE STUFF

// Host server
var app = express(); // this is just the beginning
console.log("Express set up! ... (1/5)");

app.get(app.use(express.static(workDir)), function (req, res) { // open up hatenadir directory
  console.log("Directory accessed! ... (2/5)");
});

var server = app.listen(port, function () { // open server up
  var host = server.address().address;
  var port = port;
  console.log("Server set up! Connect to " + host + ":" + port + ". (3/5)");
});

// Proxy

redbird.register("flipnote.hatena.com", "localhost:" + port);

console.log("Proxy set up, nearly there! (4/5)");

// Logging

  // create classes of each type of error/request
  // 403
  // 200
console.log("WARNING: Logging not set up");
console.log("All ready to go! (5/5)");

// todo:
//    Logging, "Handles", Plaintext database implementation, ugoxml implementation, HATENA-TOOLS handling, connection-test
