const play = document.querySelector("#play")
const progressBar = document.querySelector("#progressBar")
const songArtist = document.querySelector(".song__artist")
const songTitle = document.querySelector(".song__title")
const song = document.querySelector("#song")

let recent_volume= document.querySelector('#volume'); 





var playing = true;


var songs = ["Koza-Beton.mp3" , "hot16 Piorun ft. Dario.mp3" , "ZetHa ft. Borixon, ReTo - Wesoły Numer O Smutnych Rzeczach.mp3"], songIndex = 0;
thumbnails = ["./zdjęcia/maxresdefault.jpg" , "./zdjęcia/hot16piorunmario.png", "./zdjęcia/wesolynumerosmutnychrzeczach.png"];
songArtists = ["Koza" , "Piorun ft: Dario" , "Zetha ft: Borixon , Reto"]; 
songTitles = ["Beton" , "#Hot16challenge" , "Wesoły numer o smutnych rzeczach"];

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
    document.querySelector("#thumbnail").src = thumbnails[songIndex];
    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];
    playing = true;
    playPause()
}

function previousSong() {
    songIndex--;
    if (songIndex < 0) songIndex = 2;
    document.querySelector("#song").src = songs[songIndex];
    document.querySelector("#thumbnail").src = thumbnails[songIndex];
    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];
    playing = true;
    playPause()
}

// function changeprogressbar() {
//     const progressBar = document.querySelector("#progressBar");
//     progressBar.max = document.querySelector("#song").duration;
//     progressBar.value = document.querySelector("#song").currentTime;
// }
// setInterval(changeprogressbar, 500);

// function changeprogressValue() {
//     const progressBar = document.querySelector("#progressBar");
//     document.querySelector("#song").duration; = progressBar.value;
// }

function updateProgressValue() {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
    document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(song.currentTime)));
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(song.duration)));
    }
};

function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};

setInterval(updateProgressValue, 700);

function changeProgressBar() {
    song.currentTime = progressBar.value;

};

function volume_change(){
	song.volume = recent_volume.value / 100;
}

let clickNumbers = 0;

jQuery('#song__heart').on("click", function() {
		clickNumbers++;
    
    if(clickNumbers % 2 == 0){
    	jQuery('#song__heart').addClass('song__heart--fill');
    } else {
    	jQuery('#song__heart').removeClass('song__heart--fill');
    }
});


function addTextArea(){
    var div = document.getElementById('div__quotes');
    div.innerHTML += "<textarea />";
    div.innerHTML += "<br/>";
}

var showplaylist = document.querySelector(".showplaylist");
var string = "";

function publish() { 
    string =  "<pre>"+document.querySelector("#div__quotes").value+"</pre>";
    showplaylist.innerHTML = string;
}

const sidenavSwitcher = document.querySelector('.sidenav__button--switcher--js')

sidenavSwitcher.addEventListener('click' , (e) => {
    const sidenav = document.querySelector('.sidenav--js');
    sidenav.classList.toggle('sidenav--visible');
})