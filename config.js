/**********************************************************
 * HATENA-SERVER-NODEJS
 *
 * Released by dylmye
 * Port of Python version created by pbsds
 *
 * v0.9.1-alpha
 *
 * config.js - User-editable config
 */

'use strict';

var config = {
    public: {
        address: "127.0.0.1", // public-facing IP address
        port: "3020" // unused port | @default 3020
    },
    internal: {
        address: "http://localhost", // server hosting | @default "http://localhost"
        port: "8080" // don't use public port | @default "8080"
    },
    logLevel: "verbose", // level of logging | @modes verbose; errors; none | @default "verbose"
    dbType: "plaintext", // storage medium | @modes plaintext (json); sqlite3 | @default "sqlite3"
    directory: {
        content: "./public/", // root of publicly available files | @default "./public/"
        movies: "./db/contents/movies/", // ppm flipnote storage | @default "./db/contents/movies/"
        logs: "./logs/", // where morgan/bunyan logs are stored | @default "./logs/"
        db: "./db/" // where database is stored | @default "./db/"
    }
};

module.exports = config;