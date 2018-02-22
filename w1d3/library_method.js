class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlist = []; //array of objects
  }

  addPlaylist(playlist) {
    let updatedLibrary = this.playlist.concat(playlist);
    this.playlist = updatedLibrary;
  }
}

class Playlist {
  constructor(name) {
    this.tracks = []; //array of objects
  }

  addTrack(track) {
    let updatedPlaylist = this.tracks.concat(track);
    this.tracks = updatedPlaylist;
  }

  overallRating() {
    let rating = this.tracks.map(track => {
      return track.rating;
    });
    let sum = 0;
    for (let int of rating) {
      sum += int;
    }
    let average = sum / rating.length;
    return average;
  }

  totalDuration() {
    let duration = this.tracks.map(track => {
      return track.duration;
    });
    let sum = 0;
    for (let int of duration) {
      // console.log(int);
      sum += int;
    }
    return sum;
  }
}

class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.duration = length;
  }
}

let library1 = new Library("My Library", "Michael");
let playlist1 = new Playlist("My Playlist");
let track1 = new Track("Song1", 5, 180);
let track2 = new Track("Song2", 3, 180);
let track3 = new Track("Song3", 10, 180);

library1.addPlaylist(playlist1);
playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);

// console.log(library1);
console.log(playlist1);
// console.log(track1);

console.log("Overall Rating:", playlist1.overallRating());
console.log("Overall Duration:", playlist1.totalDuration());

// var library1 = {
//   tracks: {
//     t01: {
//       id: "t01",
//       name: "Code Monkey",
//       artist: "Jonathan Coulton",
//       album: "Thing a Week Three"
//     },
//     t02: {
//       id: "t02",
//       name: "Model View Controller",
//       artist: "James Dempsey",
//       album: "WWDC 2003"
//     },
//     t03: {
//       id: "t03",
//       name: "Four Thirty-Three",
//       artist: "John Cage",
//       album: "Woodstock 1952"
//     }
//   },

//   playlists: {
//     p01: {
//       id: "p01",
//       name: "Coding Music",
//       tracks: ["t01", "t02"]
//     },
//     p02: {
//       id: "p02",
//       name: "Other Playlist",
//       tracks: ["t03"]
//     }
//   },

//   printPlaylists: function() {
//     for (var p in this.playlists) {
//       console.log(
//         p + ":",
//         this.playlists[p].name,
//         "-",
//         this.playlists[p].tracks.length,
//         "tracks"
//       );
//     }
//   },

//   printTracks: function() {
//     for (var t in this.tracks) {
//       console.log(
//         t + ":",
//         this.tracks[t].name,
//         "by",
//         this.tracks[t].artist,
//         "(" + this.tracks[t].album + ")"
//       );
//     }
//   },

//   printPlaylist: function(playlistId) {
//     var locatePlaylist = this.playlists[playlistId];
//     var locateTrack = this.playlists[playlistId].tracks;

//     console.log(
//       playlistId + ":",
//       locatePlaylist.name,
//       "-",
//       locateTrack.length,
//       "tracks"
//     );
//     for (t in locateTrack) {
//       console.log(
//         locatePlaylist.tracks[t] + ":",
//         this.tracks[locateTrack[t]].name
//       );
//     }
//   },

//   addTrackToPlaylist: function(trackId, playlistId) {
//     this.playlists[playlistId].tracks.push(trackId);
//   },

//   uid: function() {
//     return Math.floor((1 + Math.random()) * 0x10000)
//       .toString(16)
//       .substring(1);
//   },

//   addTrack: function(name, artist, album) {
//     var newId = uid();

//     this.tracks[newId] = {
//       id: newId,
//       name: name,
//       artist: artist,
//       album: album
//     };
//   },

//   addPlaylist: function(name) {
//     var newId2 = uid();

//     this.playlists[newId2] = {
//       id: newId2,
//       name: name,
//       tracks: ["test"]
//     };
//   }
// };

// library1.printTracks();

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {};
