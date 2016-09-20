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

/**
 * getProxyOptions - set up Redbird
 * @author Dylan Myers <246db485@opayq.com>
 * @param {string} status - Logging disabled/enabled (
 * @returns {object} redbirdOptions - Options object for the Redbird reverse proxy.
 */

function getProxyOptions(status) {
    if (status) {

        // mkdirp setup
        mkdirp(config.directory.logs + func.getLogDate("mkdirp"), function mkdirAttempt(err) { // create a mkdirp instance with directory
            if (!err) { // directory has been setup without error
                console.log("getProxyOptions: mkdirp: directory has been set up: " + config.directory.logs + func.getLogDate("mkdirp"));
            }
            else if (err) { // directory didn't set up properly
                console.error('getProxyOptions: error creating directory w/h mkdirp', err);
            }
        });

        // redbird setup
        var redbirdOptions = { // set up internal proxy thru redbird
            port: config.internal.port,
            host: config.internal.address, // express server location
            bunyan: {
                name: "hatenaserver",
                streams: [{
                    path: config.directory.logs + func.getLogDate("redbird") // log file
                }]
            }
        };
        console.log("getProxyOptions: redbird: set up with following config: " + JSON.stringify(redbirdOptions));
    }
    else {

        // mkdirp setup
        console.log("getProxyOptions: logging disabled, skipping mkdirp");
        var redbirdOptions = { port: config.internal.port };
        console.log("getProxyOptions: redbird: set up with following config: " + JSON.stringify(redbirdOptions));
    }

    return redbirdOptions;
}

if(config.logLevel != "none") {
    var rbOpts = getProxyOptions(true);
}
else {
    var rbOpts = getProxyOptions(false);
}

var proxy = new redbird(rbOpts);

// redbird proxy config
proxy.register("flipnote.hatena.com/ds/v2-eu/", config.public.address + ":" + config.public.port + "/ds/v2-xx/"); // europe users to worldwide
proxy.register("flipnote.hatena.com/ds/v2-us/", config.public.address + ":" + config.public.port + "/ds/v2-xx/"); // american users to worldwide
proxy.register("ugomemo.hatena.ne.jp/ds/v2-jp/", config.public.address + ":" + config.public.port + "/ds/v2-xx/"); // japanese users to worldwide; thanks to james
proxy.register("flipnote.hatena.com/ds/v2-xx/", config.public.address + ":" + config.public.port + "/ds/v2-xx/"); // worldwide users to worldwide
