const play = document.querySelector("#play")


var playing = true;

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