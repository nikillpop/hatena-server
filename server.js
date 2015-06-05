// hatena-server-nodejs
// original - pbsds (sha-2 23e198ccf068539a2fc374bc2f8571a36d057d29)
// ported   - dylmye (v0.7-alpha)

/* @requires:
    ¬ nodeJS (server provider)
    ¬ expressJS (server)
    ¬ redbird (proxy)
    ¬ mkdirp (to make the log directory)
*/

/* changelog
    ¬ v0.1-alpha - basic server design
    ¬ v0.5-alpha - proxy added
    ¬ v0.7-alpha - added logging (uses built-in bunyan) + rewriting v2-eu etc to -xx
    ¬ v0.8-alpha - FUTURE - planning to add UGO functionality
*/

console.log("hatena-server-nodejs # dylmye # pbsds # v0.7-alpha");
function getLogDate(isLog) {
    var now     = new Date();
    var year    = now.getFullYear();
    var month   = now.getMonth() + 1;
    var day     = now.getDate();

    if(month.toString().length == 1) {
        var month = '0'+month;
    }
    if(day.toString().length == 1) {
        var day = '0'+day;
    }
    if (isLog) {
        var logDate = year + '/' + month + '/' + day + '.log'; // for redbird
    }
    else {
        var logDate = year + '/' + month; // for mkdir
    }
    return logDate;
}

// EDIT THESE
var hosta = "YOURSERVERHERE"; // your server location
var porta = "3020"; // port for server
var doLog = new Boolean(true); // if false, no logging happens
var workDir = "./public/"; // where files are served
var logDir = "./logs/"; // where logs are stored

// DEPENDENCIES
console.log("UPDATE: Importing Modules");
var express = require('express');
var mkdirp = require('mkdirp');
mkdirp(logDir + getLogDate(false), function (err) { // create logging dir
    if (!err) { // hooray! directory is set up
        console.log("UPDATE: Directory created/already existent")
    }
    else if (err) { // some error: tell user
        console.log("ERROR: Couldn't create directory: " + err)
    }
});
if (doLog) { // if logging is enabled
    var redbird = new require('redbird')({
        port: 8080,
        host: "http://localhost",
        bunyan: {
            name: "hatenaserver",
            streams: [{
                path: "./logs/" + getLogDate(true), // log file
            }]
        }
    });
}
else { // if logging is disabled
    var redbird = new require('redbird')({ port: 8080 })
}
console.log("UPDATE: Modules imported");


// REST OF THE STUFF

// Host server
console.log("UPDATE: Attempting execution of Express");
var app = express(); // this is just the beginning
console.log("UPDATE: Express App executed");

app.get(app.use(express.static(workDir)), function (req, res) { // open up hatenadir directory
  console.log("UPDATE: Files are accessible");
});

var server = app.listen(porta, function () { // open server up
  var host = hosta;
  var port = porta;
  console.log("UPDATE: Server up");
});

// Proxy
console.log("UPDATE: Attempting Proxy Config");
redbird.register("flipnote.hatena.com/ds/v2-eu/", hosta + ":" + porta + "/ds/v2-xx"); // europe users to worldwide
redbird.register("flipnote.hatena.com/ds/v2-us/", hosta + ":" + porta + "/ds/v2-xx"); // american users to worldwide
redbird.register("flipnote.hatena.com/ds/v2-xx/", hosta + ":" + porta + "/ds/v2-xx"); // other users to worldwide

console.log("UPDATE: Proxy Functional");

console.log("hatena-server is up!");

// todo:
//    Plaintext database implementation, ugoxml implementation, HATENA-TOOLS handling
