// dylmye - hatena-server-nodejs
// v0.8-alpha
// original file. full copyright to dylmye

fs = require('fs');
// ########################################
// VARIABLES
var this.creatorToPass = {
    fhid: "",
    name: "",
    avatar: "",
    stars: [
        yellow: 0,
        green: 0,
        red: 0,
        blue: 0,
        purple: 0
    ],

}; // fill with visiting users' data
var this.isNew = new Boolean(false); // set to true after upload
var this.views = 0;
var this.stars = 0;
var this.downloads = 0;
// ########################################
// SQLITE
if (isSDB) { // IF USING SQLITE

}; // END SQLITE
else if (!isSDB) {
    fs.readFileSync('./db/all-flipnotes.json', 'utf8', function (err, data) {
        if (!err) { // can open file!
            
            var flipData = data;

            // ########################################
            // @func Query()
            //    All Queries - generic or specific (except channelGather(cid))
            //    ¬ type - { user ¦ flip }
            //    ¬ fid - user's id
            //    ¬ flipid - (for flip) - the id of the flip
            function Query(type, fhid, flipid) {
                if (type == "user") {
                    // creator search
                    // returns @obj {fhid: "fhid", friendly: "hi", flips [ ... ]}
                    // get "abc"'s friendly: var aaa = Query("user", "abc")[0].friendly
                    return flipData.filter(
                        function (data) {
                            return data.fhid == fhid;
                        }
                    );

                } // end type == user
                
                else if (type == "flip") {
                    // flipnote search
                    // returns @obj {id: "aaa", title: "title", views: 14, channelid: 4, stars: [ ... ], comments: [ ... ]}
                    for (var i = 0; i < flipData.length; i++) {
                        if (flipData[i].flips[0][flipid] !== undefined) {
                            return flipData[i].flips[0][flipid];
                        }
                    }
                } // end type == flip
                
                else {
                    throwNewErr("searching flipData", "type is invalid");
                } // end invalid type
            }

            // debug @func flipsGather() - return all flips
            // takes no arguements - returns each flip as object
            function flipsGather() {
                for (var i = 0; i < flipData.length; i++) {
                    console.log(flipData[i].flips[0]);
                }
            }
            
            
            // ########################################
            // @func addNew()
            //    Positive modification to all-flipnotes
            //    ¬ type - { user ¦ flip }
            //    ¬ fid - user's id
            //    ¬ flipid - (for flip) - the id of the flip
            function addNew(type, fhid, flipid) {
                if(type == "user") {
                    var userPos = Query("user", fhid, "0");
                    var flipsPos = userPos[0].flips[0];
                    var flipsPos[flipid] = # here #
                }
                else if(type == "flip") {
                    
                }
                else {
                    throwNewErr("adding to flipData", "type is invalid");
                }
            }
        } // end !err
        else { // can't open file
            throwNewErr('opening plaintext db file', 'cannot open all-flipnotes.json');
        }
    }); // end fs.readFileSync() - all-flipnotes
    
    fs.readFileSync('./db/channels.json', 'utf8', function (err, data) {
        if(!err) {
            
            var channelData = data;
            
            // ########################################
            // @func channelGather()
            //    get flips by channel
            function channelGather(cid) {
                return channelData.filter(
                    function (data) {
                        return data._id == cid;
                    }
                );
            }
        } // end !err
        else {// can't open file
            throwNewErr('opening plaintext db file', 'cannot open channels.json');
        }
    }); // end fs.readFileSync() - channels
    
} // end if(!isSDB)