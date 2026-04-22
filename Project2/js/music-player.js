let sound = null;
let currentIndex = 0;

const songs = [
    {   cover:"../media/music/covers/song1.jpg",
        name: "When the stardust hits",
        trackNo: "1.",
        duration: "3:31",
        audio: "../media/music/song1.mp3"
    },
    {   cover:"../media/music/covers/song2.jpg",
        name: "Boss of me",
        trackNo: "2.",
        duration: "2:58",
        audio: "../media/music/song2.mp3"
    },

    {   cover:"../media/music/covers/song3.jpg",
        name: "Luxury",
        trackNo: "3.",
        duration: "3:26",
        audio: "../media/music/song3.mp3"
    },

    {   cover:"../media/music/covers/song4.jpg",
        name: "glitter ✩‧₊˚",
        trackNo: "4.",
        duration: "3:36",
        audio: "../media/music/song4.mp3"
    },

    {   cover:"../media/music/covers/song5.jpg",
        name: "Heaven",
        trackNo: "5.",
        duration: "2:31",
        audio: "../media/music/song5.mp3"
    },

    {   cover:"../media/music/covers/song6.jpg",
        name: "Romance",
        trackNo: "6.",
        duration: "3:31",
        audio: "../media/music/song6.mp3"
    },

    {   cover:"../media/music/covers/song7.jpg",
        name: "Sunny Duet",
        trackNo: "7.",
        duration: "3:34",
        audio: "../media/music/song7.mp3"
    },

    {   cover:"../media/music/covers/song8.jpg",
        name: "Girl like me",
        trackNo: "8.",
        duration: "2:26",
        audio: "../media/music/song8.mp3"
    },

    {   cover:"../media/music/covers/song9.jpg",
        name: "GOODBYENOKUBAY - SAYONARA!!",
        trackNo: "9.",
        duration: "2:46",
        audio: "../media/music/song9.mp3"
    },

    {   cover:"../media/music/covers/song10.jpg",
        name: "hyvät herrat – Rework",
        trackNo: "10.",
        duration: "2:09",
        audio: "../media/music/song10.mp3"
    },
]

console.log("i am hugnry")

//creating track names

window.addEventListener("DOMContentLoaded", () => {
  const trackHolder = document.querySelector(".trackholder");

  songs.forEach((song, index) => {
    const track = document.createElement("div");
    track.classList.add("track");

    track.innerHTML = `
      <p>${song.trackNo}</p>
      <p>${song.name}</p>
      <p>${song.duration}</p>
    `;
    //adding event listener for playing songs or whatever
    track.addEventListener("click",() =>{
        playSong(index)
    })
    trackHolder.appendChild(track);
  });
});

function playSong(index) {
  const song = songs[index];
  currentIndex = index;

// stop previous song
  if (sound) {
    sound.stop();
    }

    sound = new Howl({
    src: [song.audio],
    html5: true
    });
    sound.play();
    console.log("Playing:", song.name);


}

