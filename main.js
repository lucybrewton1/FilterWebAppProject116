noseX="";
noseY="";
function savePhoto() {
    save("projectFilter.png");
}
function preload() {
    img=loadImage("mustache.png");
}
function setup() {
    canvas=createCanvas(600,500);
    canvas.position(660,200);
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
    image(video,0,0,600,500);
    image(img,noseX,noseY,90,50);
}
function modelLoaded() {
    console.log("Model is Loaded");
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x-60;
        noseY=results[0].pose.nose.y+15;
    }
}