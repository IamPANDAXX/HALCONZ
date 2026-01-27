const btnMusic = document.getElementById("start-music");
const spotify = document.getElementById("spotify-player");

btnMusic.addEventListener("click", () => {
  spotify.style.display = "block";
  
  btnMusic.classList.add("explode");

  setTimeout(() =>{
    btnMusic.remove();  
  }, 500); 

});
