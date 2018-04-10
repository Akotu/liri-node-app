var keys = require("./keys.js");
var request = require("request");
var client = require("twitter");

var fs = require("fs");

var command = process.argv[2];
var value = process.argv[3];

var Spotify = require('node-spotify-api');

fs.writeFile("log.txt");


 function spotifyThisSong() {

    var spotify = new Spotify(keys.spotify);

    if (value === undefined){
        value = 'stairway to heaven';
    };

    if (command === "spotify"){

    spotify.search({ type: 'track', query: value }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        }else{
            var result = "Song name: " + "'" + value + "'" + 
            "/n" + "Album name: " + "'" + data.tracks.items[0].album.name + "'" + 
            "/n" + "Artist name: " + "'" + data.tracks.items[0].album.artists[0].name + "'" + 
            "/n" + "URL: " + "'" + data.tracks.items[0].album.external_urls.spotify + "'";
            console.log(result);

                fs.appendFile("log.txt", result, function(err){
                    if (err) throw err;
                    console.log("Logged!");
                })

        }
    }
    )};
}
spotifyThisSong();
 










