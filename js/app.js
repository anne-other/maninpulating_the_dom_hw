document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  form.addEventListener('submit', handleFormSubmit);

    renderList();
});

const localSongs = function () {
  return JSON.parse(localStorage.getItem("songs"));
}

const getList = function () {
  let localSong = localSongs()
  if (localSong !== null){
    return localSong;
  }
  else {
    return [];
  }
};

const createLi = function (liItem, value) {
  const itemLi = document.createElement("li");
  itemLi.textContent = `${liItem}: ${value}`;

  return itemLi;
}

const handleFormSubmit = function (event) {
  event.preventDefault();
  rockSongList = getList();

  song = {
    "Song Title": event.target.song_title.value,
    "Band Name": event.target.band_name.value,
    "Genre": event.target.genre.value
  };

  rockSongList.push(song);

  localStorage.setItem("songs", JSON.stringify(rockSongList));
  renderList();
  event.target.reset();
}

const buildList = function (song) {
  const songUl = document.createElement("ul");

  for(var liItem in song) {
    let listItem = createLi(liItem, song[liItem]);
    songUl.appendChild(listItem);
  };

  return songUl
}

const renderList = function () {
  const songDiv = document.querySelector("#song-list");
  songDiv.innerHTML = "";

  const songList = getList();
  songList.forEach((song) => {
    songUl = buildList(song);
    songDiv.appendChild(songUl);
  });
}
