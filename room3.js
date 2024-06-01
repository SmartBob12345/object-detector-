numobj = "";
objectstatus = "";
objects = [];
function preload(){
    room = loadImage("image3.jpg");
}
function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
    document.getElementById("status").innerHTML = "Detecting Objects";
    detector = ml5.objectDetector("cocossd", loaded)
}
function draw(){
    image(room, 0, 0, 600, 400);
    objectstatus = document.getElementById("status").value;
    if (objectstatus != "") {
        for (var i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Object is being detected";
            x = objects[i].x;
            y = objects[i].y;
            width = objects[i].width;
            height = objects[i].height;
            label = objects[i].label
            fill("red");
            text(label, x + 20, y + 20);
            noFill();
            stroke("red");
            rect(x, y, width, height);
        }
    }
}
function loaded(){
    console.log("the model is loaded");
    detector.detect(room, gotResults)
}
function gotResults(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        numobj = result.length;
        document.getElementById("numobj").innerHTML = numobj
        objects = result;
    }
}
function back(){
    window.location = "index.html";
}

