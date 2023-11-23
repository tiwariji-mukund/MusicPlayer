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
