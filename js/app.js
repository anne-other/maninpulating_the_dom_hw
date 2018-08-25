document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  form.addEventListener('submit', handleFormSubmit);

  renderList();
});

const localSongs = function () {
  JSON.parse(localStorage.getItem("songs");
}

const getList = function () {
  if (localSongs) !== null){
    return
    localSongs;
  }
  else {
    return []
  }
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
