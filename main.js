const play = document.querySelector("#play")
const progressBar = document.querySelector("#progressBar")
var playing = true;

var songs = ["Koza-Beton.mp3" , "hot16 Piorun ft. Dario.mp3" , "ZetHa ft. Borixon, ReTo - Wesoły Numer O Smutnych Rzeczach.mp3"], songIndex = 0;


function playPause() {
    if (playing) {
        const song = document.querySelector("#song") , play = document.querySelector("#play");
        play.src = "./zdjęcia/pause.png"
        song.play();   
        playing = false;
    }else {
        const song = document.querySelector("#song");
        song.pause()
        playing = true;
        play.src = "./zdjęcia/play.png"
}
}


function nextSong() {
    songIndex++;
    if (songIndex > 2) songIndex = 0;
    document.querySelector("#song").src = songs[songIndex];
    playing = true;
    playPause()
}

function previousSong() {
    songIndex--;
    if (songIndex < 0) songIndex = 2;
    document.querySelector("#song").src = songs[songIndex];
    playing = true;
    playPause()
}

function changeProgressValue() {
    const progressBar = document.querySelector("#progressBar")
}