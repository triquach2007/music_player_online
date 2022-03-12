var P_button = document.getElementById("play");
var rain_switch = document.getElementById("rain");
var bar_progress = document.getElementById("progess_bar");
var play_pos = document.getElementById("play_pos");
var retract_button = document.getElementById("retract-arrow");
function Ptext(){
    if (sound.playing()){
        P_button.innerHTML = '<i class="fas fa-play">';
    }else{
        P_button.innerHTML = '<i class="fas fa-pause"></i>';
    };
    play();
    playRain();
};

function playRain(){
    if (rain_switch.checked){
        if (sound.playing()){
            rain.play()
        }
    }
    else{
        rain.pause()
    }
};

function progress_set(val){
    $(".progress").val(val);
};

function secondsToTime(secs)
{
    secs = Math.round(secs);
    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);
    return `${hours}:${minutes}:${seconds}`;
}

window.setInterval(function(){
    progress_set((sound.seek()*100)/sound.duration());
    play_pos.innerHTML = `${secondsToTime(sound.seek())} / ${secondsToTime(sound.duration())}`;
},10);

var collapsed = false;
retract_button.addEventListener('click', function(){
    if (!collapsed){
        $(".filter")
            .animate({width:"0%"}, {queue: false})
            .animate({opacity: '0'}, {queue: false}) 
        }
})

rain_switch.addEventListener('click', playRain);
P_button.addEventListener('click', Ptext)