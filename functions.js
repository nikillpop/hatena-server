/**********************************************************
 * HATENA-SERVER-NODEJS
 *
 * Released by dylmye
 * Port of Python version created by pbsds
 *
 * v0.9.1-alpha
 *
 * functions.js - Exportable functions
 */

'use strict';

module.exports = {
    /**
     * getLogDate - Create name for current log
     * @author Dylan Myers <246db485@opayq.com>
     * @param {string} logType - Decide format to return.
     * @return {string} logDate - file or directory of log
     */
    getLogDate: function getLogDateInternal(logType) {
        var now     = new Date();
        var year    = now.getFullYear();
        var month   = now.getMonth() + 1;
        var day     = now.getDate();

        // zero-padding if date particle is single-digit
        if (month.toString().length == 1) {
            var month = '0' + month;
        }
        if (day.toString().length == 1) {
            var day = '0' + day;
        }

        if (logType == "redbird") {
            var logDate = year + '/' + month + '/' + day + '.proxy.log'; // for redbird
        }
        else if (logType == "morgan") {
            var logDate = year + '/' + month + '/' + day + '.server.log'; // for morgan
        }
        else if (logType == "mkdirp") {
            var logDate = year + '/' + month; // for mkdirp
        }
        else {
            var logDate = "undefined.log";
        }

        return logDate;
    }
};