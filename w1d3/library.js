var library1 = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (var p in library1.playlists) {
    console.log(p + ":", library1.playlists[p].name, "-", library1.playlists[p].tracks.length, "tracks");
  }
}

// printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var t in library1.tracks) {
    console.log(t + ":", library1.tracks[t].name, "by", library1.tracks[t].artist, "(" + library1.tracks[t].album + ")");
  }
}

// printTracks();



// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

  var locatePlaylist = library1.playlists[playlistId];
  var locateTrack = library1.playlists[playlistId].tracks

  console.log(playlistId + ":", locatePlaylist.name, "-", locateTrack.length, "tracks");
  for (t in locateTrack) {
    console.log(locatePlaylist.tracks[t] + ":", library1.tracks[locateTrack[t]].name);
  }
}



// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library1.playlists[playlistId].tracks.push(trackId);
}


// addTrackToPlaylist("t03", "p01");
// printPlaylist("p01");



// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}




// adds a track to the library

var addTrack = function (name, artist, album) {
  var newId = uid();

  library1.tracks[newId] = {
    id: newId,
    name: name,
    artist: artist,
    album: album
  }
}

// addTrack("Song Name1", "Artist 1", "Album 1");
// console.log(library1.tracks);



// adds a playlist to the library

var addPlaylist = function (name) {
  var newId2 = uid();

  library1.playlists[newId2] = {
    id: newId2,
    name: name,
    tracks: ["test"]
  }
}

// addPlaylist("newly added playlist")
// printPlaylists ();

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
  var regEx = new RegExp(query, "gi");
  for (item in library1.tracks) {
    if (library1.tracks[item].name.search(regEx) >= 0 || library1.tracks[item].artist.search(regEx) >= 0 || library1.tracks[item].album.search(regEx) >= 0) {
      console.log(library1.tracks[item]);
    }
  }
}

printSearchResults("J");

