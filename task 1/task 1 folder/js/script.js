"use strict";
// variables outside of functions are readable by every function
const s1x = 0;
const s1y = 0;




function setup() {
    console.log("go")
    createCanvas(500, 500);
    background (100);
    drawEllipse(12, 12, 12, 12, 12, 12, 12) //always use the parameters in the same order as you created them in ur function parantheses
    drawEllipse( 50, 50, 20, 20 ,20 ,20 ,20)
    drawEllipse( 80, 80, 30, 30 ,20 ,20 ,20)
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
