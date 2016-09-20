///////////////////////////////////////////
// UGO.js
// hatenatools-node-js

// 0.1.0

// TO DO - START FRESH FROM PYTHON

// based on UGO.py, by pbsds under AGPL3
// licensed under ISC

// .ugo file r/w'er
// .ugojson compiler

var fs = require('fs');

// asciiToDecimal - converts a set of ascii strings to their decimal equiv
//  takes - ascii - array of ascii strings
//          isLE  - bool - is little endian? (def false)

// decimalToAscii - converts a decimal into an ascii string of chosen length
//  takes - dec  - decimal, int
//          len  - length of ascii to return, int (def 8)
//          isLE - bool - is little endian? (def false)

var url = require('url');
var url_parts = url.parse(request.url, true);
var query = url_parts.query;
console.log(query);

// zipAlign - padding data?
//  takes - len - int
//          r   - int (def 4)
function zipAlign(len, r) {
    if (len % r) {
        return len + (4 - len % r);
    }
    else {
        return len;
    }
}

// readFile - opens file and applies operations below to it
function readFile(path) {
    fs.open(path, "r", function fsReadUGO(status, fd) {
        if (status) {
            console.log("ugo.js: readFile: fsReadUGO: error in opening file at following path: " + path);
            return;
        }
        
        // about ugo files
        // https://git.io/vwl4V 
        // 1 - header
        // 2 - Table of Lengths
        // 3 - S#1 - Table of Contents
        // 4 - S#2 - Embedded files
        
        var ugarBuffer = new Buffer(4);
        // fs.read(fd, buffer, offset, length, position, callback)
        fs.read(fd, ugarBuffer, 0, 4, function transferToGetHeader(err, num) {
            console.log(buffer.toString('utf8', 0, num));
        });
    });
}
// getHeader - reads and interprets header data

function getHeader(filedata) {
    console.log("header");
}


/*****************/

module.exports = {
    renderToUGO: function renderToUGOInternal(request, response) {
        var foo = "x";
    }
};