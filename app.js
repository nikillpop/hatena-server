/**********************************************************
 * HATENA-SERVER-NODEJS
 *
 * Released by dylmye
 * Port of Python version created by pbsds
 *
 * v0.9.1-alpha
 *
 * app.js - where the magic happens
 */

var config = require('./config.js');

var server = require('./server.js');

var proxy = require('./proxy.js');

console.info("You can access your server locally, at: " + config.internal.address + ":" + config.public.port);
console.info("Proxy Settings: \n Server: " + config.public.address + "\n Port: " + config.public.port);