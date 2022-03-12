var isRain = false;

var sound = new Howl({
    src: ['audio/lofi.mp3'],
    html5: true
  });

var rain = new Howl({
  src: ['audio/rain.mp3'],
  html5: true,
  loop: true
});

function play(){
  if (!sound.playing()){
    sound.play();
    document.getElementById("title").innerHTML = "Now playing: LOFI";
  }else{
    sound.pause();
    rain.pause();
    document.getElementById("title").innerHTML = "MUSIC";
  };
};