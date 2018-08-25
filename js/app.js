document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  form.addEventListener('submit', handleFormSubmit);

  renderList();

  const deleteButton = document.querySelector("#delete-form");
  deleteButton.addEventListener('submit', handleDeleteSubmit);
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

const saveList = function (list) {
  localStorage.setItem("songs", JSON.stringify(list))
}

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
    "Genre": event.target.genre.value,
    "Rating": event.target.rating.value
  };

  rockSongList.push(song);

  saveList(rockSongList);
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

const handleDeleteSubmit = function (event) {
  console.log("pressed");
  saveList([]);
  renderList();
}
