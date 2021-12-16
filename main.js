function setup(){
canvas=createCanvas(550,550);
canvas.position(560,150);
video=createCapture(VIDEO);
video.size(550,550);

posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes);
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
    }
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function draw(){
    background(51);
}
