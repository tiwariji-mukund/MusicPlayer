// songs

const songs = [
  {
    songId: "1",
    genre: "Hip Hop",
    name: "Faded",
    artist: "Alan Walker",
    music_path: "./music/Alone.mp3",
    image: "./artist/alan-walker-faded.jpeg",
  },
  {
    songId: "2",
    genre: "Rock",
    name: "Alone",
    artist: "Alan Walker",
    music_path: "./music/Faded.mp3",
    image: "./artist/alan-walker.jpeg",
  },
  {
    songId: "3",
    genre: "Hip Hop",
    name: "First Fighting a Sandstorm",
    artist: "Sia",
    music_path: "./music/First Fighting a Sandstorm.mp3",
    image: "./artist/sia.jpeg",
  },
  {
    songId: "4",
    genre: "Pop",
    name: "Love You Like A Love Song",
    artist: "Selena Gomez",
    music_path: "./music/Love You Like A Love Song.mp3",
    image: "./artist/selena-gomez.jpeg",
  },
  {
    songId: "5",
    genre: "Pop",
    name: "Pretty Girl",
    artist: "Maggie Lindemann",
    music_path: "./music/Pretty Girl.mp3",
    image: "./artist/Maggie-Lindemann.jpeg",
  },
];

function MusicPlayer() {
  const artistName = document.getElementById("artist-name");
  const songName = document.getElementById("song-name");
  const artistImage = document.getElementById("image");
  const allSongs = document.getElementById("all-songs");
  const audioPlayer = document.getElementById("audio-player");
  const backBtn = document.getElementById("previous");
  const nextBtn = document.getElementById("next");
  const name = document.getElementById("playlistName");
  let current = 0;

  nextBtn.addEventListener("click", () => {
    current++;
    current %= songs.length;
    playSong(songs[current]);
  });

  backBtn.addEventListener("click", () => {
    if (current === 0) current = songs.length - 1;
    else current--;
    playSong(songs[current]);
  });

  // display all songs
  songs.forEach((song) => {
    const newSong = document.createElement("li");
    newSong.classList.add("all-songs");
    newSong.textContent = `${song.name} - ${song.artist}`;
    newSong.addEventListener("click", () => {
      playSong(song);
    });
    allSongs.appendChild(newSong);
  });

  const addPlaylist = document.getElementById("add-btn");
  const currPlayList = document.querySelector(".currPlayList");
  const currPlayListArray = [];
  const allPlayListArray = [];
  addPlaylist.addEventListener("click", () => {
    currentPlaylistSongs(currPlayListArray, songName.textContent);
  });

  // function to add song in current playlist
  function currentPlaylistSongs(arr, song) {
    if (!arr.includes(song)) {
      arr.push(song);
      displayAllSongs();
    }
  }
  // function to display all songs
  function displayAllSongs() {
    const song = document.createElement("li");
    song.classList.add("name");
    song.textContent = currPlayListArray[currPlayListArray.length - 1];
    currPlayList.appendChild(song);
  }

  function playSong(song) {
    artistImage.src = song.image;
    artistImage.alt = `${song.artist}`;
    artistName.textContent = song.artist;
    songName.textContent = song.name;
    audioPlayer.src = song.music_path;
    audioPlayer.play();
  }
  // script for create playlist

  function createPlaylist(e) {
    e.preventDefault();
    const playlist = document.createElement("li");
    playlist.classList.add("name");
    playlist.textContent = name.value;
    const allPlaylist = document.querySelector(".allPlayList");
    allPlaylist.appendChild(playlist);
    showAllPlaylst(allPlayListArray, playlist.textContent);
    name.value = "";
    console.log(allPlayListArray);
  }

  function showAllPlaylst(arr, playlist) {
    if (!arr.includes(playlist)) arr.push(playlist);
  }
  document
    .getElementById("createPlaylistForm")
    .addEventListener("submit", createPlaylist);

  // filter song using genre
  const genre = document.getElementById("myGenre");
  genre.addEventListener("change", filterSong);
  function filterSong() {
    const selectedGenre = genre.value;
    allSongs.innerHTML = "<h1>All Songs</h1>";
    songs.forEach((song) => {
      if (selectedGenre === "All" || selectedGenre === song.genre) {
        const newSong = document.createElement("li");
        newSong.classList.add("all-songs");
        newSong.textContent = `${song.name} - ${song.artist}`;
        newSong.addEventListener("click", () => {
          playSong(song);
        });
        allSongs.appendChild(newSong);
      }
    });
  }
}

MusicPlayer();
