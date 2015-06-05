# hatena-server for NodeJS
### version 0.7-alpha
hatena-server is a replacement server that acts just how Flipnote client likes it.

## Requires

 * [NodeJS](https://nodejs.org/)
 * expressJS - ``` npm install express ```
 * redbird - ``` npm install redbird ```
 * mkdirp - ``` npm install mkdirp ```

## Installing

    $ git clone git://github.com/dylmye/hatena-server.git
    $ cd hatena-server

There are some parts you need to configure yourself:  

 * ```@str hosta``` - being the server you're hosting hatena-server (this software) on. Default: your external ip
 * ```@str porta``` - being the port the server is being hosted on. NEVER USE 8080, THIS IS WHAT THE PROXY USES Default: "3020"
 * ```@bol doLog``` - enable / Disable Logging. Default: true
 * ```@str workDir``` - where the files are hosted. Bear in mind the client requests ```http://flipnote.hatena.com/ds/v2-xx/file``` (xx being a region code). Default: "./public/"
 * ```@str logDir``` - where logs are stored. Created by bunyan. Default: "./logs/"  

The proxy is hosted on localhost, and clients can connect to your external IP, on port 8080.

## Usage

    $ node server.js

Software is in Alpha stage. No guarantee is made of the accuracy, completness or functionality presented within this document or the software bundled with it.
## Copyright

Original (c) Hatena Co., Ltd  
Python version (c) pbsds under GNU AFFERO 3  
NodeJS port (c) dylmye under ISC  
