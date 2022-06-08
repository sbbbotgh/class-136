statuss = "";
video = "";

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}

function setup(){
    video.hide();
    canvas = createCanvas(480, 380);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 480, 380);
}

function start(){
    objectDetecter = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
console.log("Model Loaded!");
statuss = true;
video.loop();
video.speed (1);
video.volume(0);
}