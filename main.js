function setup() {
    video = createCapture(VIDEO);
    video.size(650, 500);
    canvas = createCanvas(550, 500);
    canvas.position(1360, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('poseNet se incio!');
}
function gotPoses(results) {
   if(results.length > 0) {
    console.log((results));
   }
}
function draw() {
    background('rebeccapurple');
}