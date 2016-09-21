# hatena-server-nodejs
## version 0.9.1-alpha    
hatena-server is a DIY Flipnote Hatena replacement. Serve PPM flipnotes through your own social network.    

## Requires    

* [NodeJS](https://nodejs.org/)    
* NPM    

## Installing    

    $ git clone git://github.com/dylmye/hatena-server.git
    $ cd hatena-server
    $ npm install    
    
Uses the following modules:

* redbird
* express
* morgan
* file-stream-rotator    
* mkrdirp
* sqlite3


Please edit `config.js` before running.    

## Running    

    $ node hatena-server