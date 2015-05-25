Hatena server - by pbsds
======

This is a replacement for the Flipnote Hatena service for the DSi which has ended.
It's written in Python 2.7 and requires Twisted
Future versions could need PIL aswell
This project uses Hatenatools, also written by me. It can be found here: http://pbsds.net/projects/hatenatools

To use it, simply run server.py
On the DSi, set the proxy settings to point to this server on port 8080, then access Flipnote Studio as usual. A more detailed guide is on the wiki section.

# hatena-server for NodeJS

hatena-server is a replacement server that acts just how Flipnote client likes it.

## Requires

 * [NodeJS](https://nodejs.org/)
 * expressJS - ``` npm install express ```
 * redbird - ``` npm install redbird ```

## Installing

    $ git clone git://github.com/dylmye/hatena-server.git
    $ cd hatena-server

    et voila :)

## Usage

    $ node server.js

## Copyright

Original (c) Hatena Co., Ltd
Python version (c) pbsds under GNU AFFERO 3
NodeJS port (c) dylmye under ISC
