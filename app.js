///////////////////////////////////////////
//  hatena-server
//  node-js port
//  pbsds x dylmye
//  v0.9.0-alpha

var config = require('./config.js');

var server = require('./server.js');

var proxy = require('./proxy.js');

console.info("You can access your server locally, at: " + config.internal.address + ":" + config.public.port);
console.info("Proxy Settings: \n Server: " + config.public.address + "\n Port: " + config.public.port);