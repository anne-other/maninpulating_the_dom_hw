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
    return [];
  }
};

const createLi = function (liItem, song) {
  const(liItme)Li = document.createElement("li");
  (liItem)Li.textContent = `${liItem}: ${song["liItem"]}`;

  return (liItem)Li;
}

const buildList = function (song) {
  const songUl = document.createElement("ul");
  song.forEach((liItem) => {
    liItem = createLi(liItem);
    songUl.appendChild(liItem);
    
    return songUl
  })
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
