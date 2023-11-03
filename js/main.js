document.addEventListener("DOMContentLoaded", init);

function init() {

    //relable html variables in js using the id tags
    const myVideo = document.getElementById('video-1'); //start with the video element
    const playButton = document.getElementById('play_button');
    const pauseButton = document.getElementById('pause_button');
    const muteButton = document.getElementById('mute');
    const unmuteButton = document.getElementById('unmute');
    const beginningButton = document.getElementById('rewind');
    const endButton = document.getElementById('end');
    const videoSelect = document.getElementById('video_select');
    const musicSelect = document.getElementById('music-select');
    const changeBgColorButton = document.getElementById('changeBgColor');
    

    //define event listner action with variables
    playButton.addEventListener('click', (e) => { 
    myVideo.play();
    });

    pauseButton.addEventListener('click', (e) => {
    myVideo.pause();
    });

    muteButton.addEventListener('click', (e) => {
    myVideo.muted = true;
    });

    unmuteButton.addEventListener('click', (e) => {
    myVideo.muted = false;
    });

    beginningButton.addEventListener('click', (e) => {
    myVideo.currentTime = 0; //current time 0 used to set video to start 
    });

    endButton.addEventListener('click', (e) => {
    myVideo.currentTime = myVideo.duration; //duration used to jump to the end of media 
    });

    videoSelect.addEventListener('change', (event) => {
    let selectedVideo = event.target.value;
        myVideo.src = selectedVideo;
        myVideo.load();
        //myVideo.play(); autoplays when vid is loaded
    
    });

    musicSelect.addEventListener('change', (event) => {
        let selectedMusic = event.target.value;
            myVideo.src = selectedMusic;
            musicSelect.load();
            //myVideo.play(); autoplays when vid is loaded
        
        });

    myVideo.addEventListener('ended', func1);
    myVideo.addEventListener('ended', func2);
    myVideo.addEventListener('ended', func3)


    //Background color functions 

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 6.45) {
            // Change the background color green @ 6s
            document.body.style.backgroundColor = "#3d9973";
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 7.4) {
            document.body.style.backgroundColor = "yellow";
        }
    });


    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 9.2) {
            document.body.style.backgroundColor = "brown";
        }
    });


    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 11.1) {
            document.body.style.backgroundColor = "purple";
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 13.7) {
            document.body.style.backgroundColor = "black";
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 16.5) {
            document.body.style.backgroundColor = "rgb(173, 216, 230)"; //blue
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 18.5) {
            document.body.style.backgroundColor = "#800000";
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 21.3) {
            document.body.style.backgroundColor = "rgb(250, 200, 152)";
        }
    });

    
    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 23.1) {
            document.body.style.backgroundColor = "rgb(255, 16, 240)"; //purple
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 24.98) {
            document.body.style.backgroundColor = "#f0f075"; //pale yellow
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 26.7) {
            document.body.style.backgroundColor = "#FF8362 "; //orange 
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 28.82) {
            document.body.style.backgroundColor = "#000435 "; // dark blue 
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 32.1) {
            document.body.style.backgroundColor = "black";
        }
    });


   // BUTTON COLOR CHANGE FUNCTIONS


    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 6.45) { //assign html element a js variable to control it with
            const formattingElement = document.querySelector('.formatting');
            if (formattingElement) {
                formattingElement.style.background = "#FF69B4"; //initialize button color chng
            }
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 7.4) { //assign html element a js variable to control it with
            const formattingElement = document.querySelector('.formatting');
            if (formattingElement) {
                formattingElement.style.background = "rgb(204, 219, 240)"; //revert to default color
            }
        }
    });
    

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 7.4) {
            const formattingMusic = document.querySelector('.music-formatting');
            if (formattingMusic) {
                formattingMusic.style.background = "#17517e"; //initialize button color change
            }
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 9.2) {
            const formattingMusic = document.querySelector('.music-formatting');
            if (formattingMusic) {
                formattingMusic.style.background = "rgb(204, 219, 240)"; //revert back 
            }
        }
    });

    //LOWERBUTTONS SYNC-TIMING

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 9.2) {
            const formattingButtons = document.querySelector('.play_button');
            if (formattingButtons) {
                formattingButtons.style.background = "#280137"; 
            }
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 11.1) {
            const formattingButtons = document.querySelector('.play_button');
            if (formattingButtons) {
                formattingButtons.style.background = "rgb(204, 219, 240)"; 
            }
        }
    });

//----------------------------------------------------------------

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 11.1) {
            const formattingButtons1 = document.querySelector('.pause_button');
            if (formattingButtons1) {
                formattingButtons1.style.background = "green"; 
            }
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 11.9) {
            const formattingButtons1 = document.querySelector('.pause_button');
            if (formattingButtons1) {
                formattingButtons1.style.background = "rgb(204, 219, 240)"; 
            }
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 12.0) {
            const formattingButtons2 = document.querySelector('.mute');
            if (formattingButtons2) {
                formattingButtons2.style.background = "red"; 
            }
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 12.30) {
            const formattingButtons2 = document.querySelector('.mute');
            if (formattingButtons2) {
                formattingButtons2.style.background = "rgb(204, 219, 240)"; 
            }
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 12.31) {
            const formattingButtons3 = document.querySelector('.unmute');
            if (formattingButtons3) {
                formattingButtons3.style.background = "orange"; 
            }
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 12.62) {
            const formattingButtons3 = document.querySelector('.unmute');
            if (formattingButtons3) {
                formattingButtons3.style.background = "rgb(204, 219, 240)"; 
            }
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 12.63) {
            const formattingButtons4 = document.querySelector('.rewind');
            if (formattingButtons4) {
                formattingButtons4.style.background = "yellow"; 
            }
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 12.92) {
            const formattingButtons4 = document.querySelector('.rewind');
            if (formattingButtons4) {
                formattingButtons4.style.background = "rgb(204, 219, 240)"; 
            }
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 12.93) {
            const formattingButtons5 = document.querySelector('.end');
            if (formattingButtons5) {
                formattingButtons5.style.background = "blue"; 
            }
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 13.23) {
            const formattingButtons5 = document.querySelector('.end');
            if (formattingButtons5) {
                formattingButtons5.style.background = "rgb(204, 219, 240)"; 
            }
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 13.24) {
            const formattingButtons6 = document.querySelector('.seek');
            if (formattingButtons6) {
                formattingButtons6.style.background = "purple"; 
            }
        }
    });

    myVideo.addEventListener('timeupdate', function() {
        if (myVideo.currentTime >= 13.54) {
            const formattingButtons6 = document.querySelector('.seek');
            if (formattingButtons6) {
                formattingButtons6.style.background = "rgb(204, 219, 240)"; 
            }
        }
    });





    func4();

}
 

function func1() {
    alert('The video has ended!');
}
// changes background color at the end of the video duration
function func2() {
    document.body.style.backgroundColor = "lightblue"; 
}

function func3() {
    const header = document.querySelector('header h1');
    header.style.color = "yellow"; 
}

function func4() {
    alert('Select video format first...');
}