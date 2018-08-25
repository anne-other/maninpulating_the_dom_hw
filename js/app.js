document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  form.addEventListener('submit', handleFormSubmit);
//
//   renderList();
});
//
// const localSongs = function () {
//   JSON.parse(localStorage.getItem("songs"));
// }
//
// const getList = function () {
//   if ((localSongs) !== null){
//     return
//     localSongs;
//   }
//   else {
//     return [];
//   }
// };
//
const handleFormSubmit = function (event) {
  event.preventDefault();
//   rockSongList = [];
//   const newSong = {
//     song_title: event.target.song_title.value,
//     band_name: event.target.band_name.value,
//     genre: event.target.genre.value
  }
//
//   rockSongList.push(newSong);
//
//   localStorage.setItem("songs", JSON.stringify(rockSongList));
//   renderList();
//   event.target.reset();
// }
//
// const createLi = function (liItem, song) {
//   const itemLi = document.createElement("li");
//   itemLi.textContent = `${liItem}: ${song["liItem"]}`;
//
//   return itemLi;
// }
//
// const buildList = function (song) {
//   const songUl = document.createElement("ul");
//   songUl.forEach((liItem) => {
//     liItem = createLi(liItem);
//     songUl.appendChild(liItem);
//
//     return songUl
//   })
// }
//
// const renderList = function () {
//   const songDiv = document.querySelector("#song-list");
//   songDiv.innerHTML = "";
//   const songList = getList();
//   songList.forEach((song) => {
//     songUl = buildList(song);
//     songDiv.appendChild(songUl);
//   });
// }
