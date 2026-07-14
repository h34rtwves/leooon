const songs = [

    {

        title: "Siesta Freestyle",

        artist: "Lewis OfMan",

        cover: "imágenes/siesta.jpg",
        
        audio: "music/siesta.mp3",

     lyricsFile: "lyrics/siesta.lrc"

    },


    {

        title: "Déjate Llevar",

        artist: "The Marías",

        cover: "imágenes/dejate.jpg",

        audio: "music/dejate.mp3",

        lyricsFile: "lyrics/dejate.lrc"

    },

    {

        title: "Impacto",

        artist: "Enjambre",

        cover: "imágenes/impacto.jpg",

        audio: "music/impacto.mp3",

        lyricsFile: "lyrics/impacto.lrc"

    },

    {

        title: "Espiral",

        artist: "Porter",

        cover: "imágenes/espiral.jpg",

        audio: "music/espiral.mp3",

        lyricsFile: "lyrics/espiral.lrc"

    },

    {

        title: "Contenta",

        artist: "Ed Maverick",

        cover: "imágenes/contenta.jpg",

        audio: "music/contenta.mp3",

        lyricsFile: "lyrics/contenta.lrc"

    },

    {

        title: "¿Por qué te vas?",

        artist: "Jeanette",

        cover: "imágenes/porquetevas.jpg",

        audio: "music/porquetevas.mp3",

        lyricsFile: "lyrics/porquetevas.lrc"

    },

    {

        title: "Locos",

        artist: "León Larregui",

        cover: "imágenes/locos.jpg",

        audio: "music/locos.mp3",

        lyricsFile: "lyrics/locos.lrc"

    },

    {

        title: "Entre Caníbales",

        artist: "Soda Stereo",

        cover: "imágenes/entrecanibales.jpg",

        audio: "music/entrecanibales.mp3",

        lyricsFile: "lyrics/entrecanibales.lrc"

    },

    {

        title: "Vía Láctea",

        artist: "Zoé",

        cover: "imágenes/vialactea.jpg",

        audio: "music/vialactea.mp3",

        lyricsFile: "lyrics/vialactea.lrc"

    }

];
let currentSong = 0;
const audio = new Audio();

const progress = document.getElementById("progress");

let lyrics = [];
    
async function loadLyrics() {

    const response = await fetch(songs[currentSong].lyricsFile);

    const text = await response.text();

    console.log(text);

    lyrics = [];

    const lines = text.split("\n");

    
    lines.forEach(line => {

        const match = line.match(/\[(\d+):(\d+\.\d+)\](.*)/);

        if (match) {

            lyrics.push({

                time: Number(match[1]) * 60 + Number(match[2]),

                text: match[3]

            });

        }

    });

}

function loadSong() {

    document.getElementById("song-title").textContent =
        songs[currentSong].title;

    document.getElementById("song-artist").textContent =
        songs[currentSong].artist;

    document.getElementById("album-cover").src =
        songs[currentSong].cover;

      audio.src = songs[currentSong].audio;
      
      if (songs[currentSong].lyricsFile) {

    loadLyrics();

}
document.getElementById("lyrics-es").textContent = "";

}

loadSong();
const nextButton = document.querySelector(".next");

nextButton.addEventListener("click", () => {

    currentSong++;

    if (currentSong >= songs.length) {

        currentSong = 0;

    }

    loadSong();
    if (isPlaying) {

        audio.play();

    }

});
const prevButton = document.querySelector(".prev");

prevButton.addEventListener("click", () => {

    currentSong--;

    if (currentSong < 0) {

        currentSong = songs.length - 1;

    }

    loadSong();
    
    if (isPlaying) {

        audio.play();

    }

});

const playButton = document.querySelector(".play");

let isPlaying = false;

playButton.addEventListener("click", () => {

    if (isPlaying) {

        audio.pause();

        playButton.textContent = "▶";

        isPlaying = false;

    } else {

        audio.play();

        playButton.textContent = "⏸";

        isPlaying = true;

    }

});

audio.addEventListener("timeupdate", () => {

    if (audio.duration) {

        progress.value =
            (audio.currentTime / audio.duration) * 100;

    }

    for (let i = lyrics.length - 1; i >= 0; i--) {

        if (audio.currentTime >= lyrics[i].time) {

            document.getElementById("lyrics-es").textContent =
                lyrics[i].text;

            break;

        }

    }

});

progress.addEventListener("input", () => {

    audio.currentTime =
        (progress.value / 100) * audio.duration;

});

function updateClock(){

    const mexico = new Date(
        new Date().toLocaleString("en-US",{
            timeZone:"America/Mexico_City"
        })
    );

    const hours = String(mexico.getHours()).padStart(2,"0");
    const minutes = String(mexico.getMinutes()).padStart(2,"0");
    const seconds = String(mexico.getSeconds()).padStart(2,"0");

    document.getElementById("digital-clock").textContent =
        `${hours} : ${minutes} : ${seconds}`;

    const h = mexico.getHours();

    let greeting = "";

    if(h >= 6 && h < 12){

        greeting = "🌞 Buenos días!";

    }

    else if(h >= 12 && h < 19){

        greeting = "☀️ Buenas tardes!";

    }

    else{

        greeting = "🌙 Buenas noches!";

    }

    document.getElementById("greeting").textContent = greeting;

}

updateClock();

setInterval(updateClock,1000);
