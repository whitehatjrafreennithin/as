video = ""
 object_detector = ""
 
function setup(){
    canvas = createCanvas(480, 310);
    canvas.center()
    video = createCapture();
    video.hide()
    
}
function start(){
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status"). innerHTML = "Status: Object Detecting"
}
function modelLoaded(){
    console.log("Loaded");
    status = true;
   
}
function draw()
{
    image(video, 0, 0, 480, 310);
}