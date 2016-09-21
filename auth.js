/**********************************************************
 * HATENA-SERVER-NODEJS
 *
 * Released by dylmye
 * Based on PHP script by PokeAcer: https://github.com/Flipnote-Collective/DSi-Flipnote-Auth
 *
 * v0.9.1-alpha
 *
 * auth.js - Authorising users
 */

var config = require('./config.js');
var func = require('./functions.js');

var crypto = require('crypto');

/**
 * microtime - equiv. to PHP's 'microtime'
 * @author Jeffrey Kohn <jeff@whitedoor.ca>
 * @returns {string}  - current Unix timestamp with microseconds
 */
function microtime() {
    var unixtime_ms = (new Date).getTime();
    var sec = Math.floor(unixtime_ms/1000);
    return (unixtime_ms - (sec * 1000))/1000 + ' ' + sec;
}

/**
 * createToken - generate md5-hashed timestamp that serves as token
 * @author Dylan Myers <246db485@opayq.com>
 * @returns {string}  - token
 */
function createToken() {
    return crypto.createHash('md5').update(microtime()).digest("hex");
}

/**
 * giveHeaders - sends headers for GET and POST requests
 * @author Dylan Myers <246db485@opayq.com>
 * @param res - express response object
 */
function giveHeaders(res) {
    res.append('X-DSi-New-Notices', '0');
    res.append('X-DSi-SID', createToken());
    res.append('X-DSi-Unread-Notices', '0');
    res.append('X-Hatena-Locale-Vary', 'l,c,r,d;');
    res.append('X-Ridge-Dispatch', 'Hatena::UgoMemo::Engine::DS::Auth#default');
}


/*****************/

module.exports = {
    returnAuth: function renderAuthInternal(is_post_request, request, response) {
        if(!is_post_request) {
            res.append('X-DSi-Auth-Challenge', '\0\0\0\0\0\0\0\0');
            giveHeaders(response);
        }
        else {
            // to-do: gather headers and push to db
            // https://github.com/Flipnote-Collective/DSi-Flipnote-Auth/blob/master/auth.php#L19-L29
            giveHeaders(response);
        }
    }
};