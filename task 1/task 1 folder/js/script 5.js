"use strict";
var white = "#ffffff"
var ellipseAlpha = 100
var radius = 40
var counter = 0
const gscale = 50


let orangeButton = {
    x: 30,
    y: 30,
    default: "#ff5125ff",
    hover: "#ffffffff",
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
    displaySquare(orangeButton.default,orangeButton.x,orangeButton.y,orangeButton.size)
    displaySquare(redButton.color,redButton.x,redButton.y,redButton.size)
    
    if (checkCollisionWithSquare()){
        createEllipse(radius)
    }
   

}
//&& mouseY > orangeButton.y && mouseY < orangeButton.y+orangeButton.size
//mouse hover function
function mouseHover(){
    let hovercolor = "#ffffffff"

    if (checkCollisionWithSquare()) {
        hovercolor = orangeButton.hover
        orangeButton.default = orangeButton.hover
        console.log("hover is working")
    }
           
}
//counter +1 when mouse is clicked on collision with square
function mouseClicked(){
    if (checkCollisionWithSquare()) {
        counter += 1;
        
        console.log("click is working")
    }
}

function checkCollisionWithSquare(){
    return mouseX > orangeButton.x && mouseX < orangeButton.x+orangeButton.size && mouseY > orangeButton.y && mouseY < orangeButton.y+orangeButton.size
}

function createEllipse(r){
    fill(ellipseAlpha)
    ellipse(width/2, height/2, r,r)
}