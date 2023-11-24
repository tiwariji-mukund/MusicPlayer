// songs

const aloneSong = new Audio("./music/Alone.mp3");
const fadedSong = new Audio("./music/Faded.mp3");
const sandstormSong = new Audio("./music/First Fighting a Sandstorm.mp3");
const loveSong = new Audio("./music/Love You Like A Love Song.mp3");
const prettyGirlSong = new Audio("./music/Pretty Girl.mp3");

const songs = [
  {
    name: "Faded",
    artist: "Alan Walker",
    music_path: fadedSong,
    image: "./img.png",
  },
  {
    name: "Alone",
    artist: "Alan Walker",
    music_path: aloneSong,
    image: "./img.png",
  },
  {
    name: "First Fighting a Sandstorm",
    artist: "Sia",
    music_path: sandstormSong,
    image: "./img.png",
  },
  {
    name: "Love You Like A Love Song",
    artist: "Selena Gomez",
    music_path: loveSong,
    image: "./img.png",
  },
  {
    name: "Pretty Girl",
    artist: "Maggie Lindemann",
    music_path: prettyGirlSong,
    image: "./img.png",
  },
];

function MusicPlayer() {
  const artistName = document.getElementById("artist-name");
  const songName = document.getElementById("song-name");
  const image = document.getElementById("image");
  const allSongs = document.getElementById("all-songs");
  let current = 0 % songs.length;
  let currentSong = songs[current].music_path;
  songName.textContent = `${songs[current].name} - ${songs[current].artist}`;

  // display all songs
  songs.forEach((song) => {
    const newSong = document.createElement("li");
    newSong.classList.add("all-songs");
    newSong.textContent = `${song.name} - ${song.artist}`;
    allSongs.appendChild(newSong);
  });

  // music player
  
}

// script for create playlist

function createPlaylist(e) {
  e.preventDefault();
  const name = document.getElementById("playlistName");
  const playlist = document.createElement("li");
  playlist.classList.add("name");
  playlist.textContent = name.value;
  const allPlaylist = document.querySelector(".allPlayList");
  console.log(playlist);
  allPlaylist.appendChild(playlist);
  name.innerHTML = "";
}

document
  .getElementById("createPlaylistForm")
  .addEventListener("submit", createPlaylist);

const addPlaylist = document.getElementById("add-btn");
const currPlayList = document.querySelector(".currPlayList");
addPlaylist.addEventListener("click", () => {
  const song = document.createElement("li");
  song.classList.add("name");
  song.textContent = "Faded";
  currPlayList.appendChild(song);
});

MusicPlayer();
