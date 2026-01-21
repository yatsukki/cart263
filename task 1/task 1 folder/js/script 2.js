"use strict";
// variables outside of functions are readable by every function
const s1x = 0;
const s1y = 0;




function setup() {
    console.log("go")
    createCanvas(500, 500);
    background (100);
   
    drawSquare(12, 12, 50)
    drawSquare(70, 70, 80)
    drawSquare(180, 180, 100)
}

function draw() {
   

}

function drawEllipse(x,y,w,h,r,g,b){
    fill(r,g,b)
    ellipse(x,y,w,h)
}

function drawSquare (x,y,s,r,g,b){
    fill(r,g,b)
    square (x,y,s)
}
