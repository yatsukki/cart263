"use strict";

var counter = 0
const gscale = 220


let orangeButton = {
    x: 30,
    y: 30,
    color: {
        normal: "#ff5125ff",
        hover: "#ffffffff",
    },

    
    size: 40
}

let redButton = {
    x: 80,
    y: 30,
    color: "#ff0263ff",
    size: 40
}
//creates button
function displaySquare(color,x,y,size) {
    noStroke();
    fill(color);
    square(x,y,size)

}

function setup (){
    console.log("I'm so hungry");
    createCanvas(500, 500);
    background(gscale);
    
    
}

function draw(){
    mouseHover();
    background(gscale);
    displaySquare(orangeButton.color.normal,orangeButton.x,orangeButton.y,orangeButton.size)
    displaySquare(redButton.color,redButton.x,redButton.y,redButton.size)
}
//&& mouseY > orangeButton.y && mouseY < orangeButton.y+orangeButton.size
//mouse hover function
function mouseHover(){
    if (mouseX > orangeButton.x && mouseX < orangeButton.x+orangeButton.size && mouseY > orangeButton.y && mouseY < orangeButton.y+orangeButton.size) {
        orangeButton.color.normal === orangeButton.color.hover
        console.log("hover is working")
    }
   
}