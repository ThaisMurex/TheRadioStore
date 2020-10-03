const backwardButton = document.getElementById("backward-button");
const forwardButton = document.getElementById("forward-button");
const audio = document.getElementById("audio");

const channelArray = [
  "https://streamingv2.shoutcast.com/oroyawave-minimal?icy=http", //0
  "https://streamingv2.shoutcast.com/andeanmusic?icy=http",       //1
  "https://streamingv2.shoutcast.com/oroyawave?icy=http",         //2
] 

let num = 0; // The default channel is 0
forwardButton.addEventListener("click", function () {
  audio.pause();
  num++;
  if(num > channelArray.length - 1){
      num = 0;
    }
  audio.src = channelArray[num];
  console.log(num);
  audio.load();
  audio.play();
})

backwardButton.addEventListener("click", function () {
  audio.pause();
  num--;
  if(num < 0){
      num = channelArray.length - 1;
    }
  audio.src = channelArray[num]; 
  audio.load();
  audio.play();
})

// setInterval(a, b) ; a is a function, b is time
let boolean = true;



