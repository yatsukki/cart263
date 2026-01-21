"use strict";
// variables outside of functions are readable by every function
const white = "#ffffff";
const bigSize = 100;
const smallSize = 20;
const mediumSize = 50; 
var s1x = 12; //square position
var s2x = 130;
var s3x = 210;
var gscale = 100;

let square1 = {
    x: 12,
    y: 12,
    size: bigSize,
    color: white
}

let square2 = {
    x: s2x,
    y: s2x,
    size: mediumSize,
    color: white
}

let square3 = {
    x: s3x,
    y: s3x,
    size: smallSize,
    color: white
}


function drawSquare(color,x,y,size) {
    fill(color)
    square(x,y,size);

}

function setup() {
    console.log("go")
    createCanvas(500, 500);
    background (gscale);
    
   }

function draw() {
    background(gscale) //clears out background
    fill(square1.color);
    square(square1.x,square1.y,square1.size);
    square(square2.x,square2.y,square2.size);
    square(square3.x,square3.y+=1,square3.size)//moving square
        //handling reset
        if (square3.y > width){
            square3.y = 0
        }
    
}

//update square 1 position
function mousePressed(){
console.log("mouse was pressed bruh")
square1.x = random(0, width)
}

function keyPressed(){
    if (keyCode === 32) {
        console.log("space was pressed bruh")
        square2.y = random(0, width);
    }
}