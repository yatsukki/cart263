"use strict";
// variables outside of functions are readable by every function

const gscale =100


function setup() {
    console.log("poop dot com")
    createCanvas(500, 500);
    background (gscale);
    
}
//anything that depends on width and height of the canvas should be created after createCanvas
let rectangle1 = {
    color: "#00e1ffff",
    height: undefined,
    width: undefined,
    x: 0,
    y: 0
}

let rectangle2 = {
    color: "#94f3ffff",
    height: undefined,
    width: undefined,
    x: undefined,
    y: 0
}

let rectangle3 = {
    color: "#e3fcffff",
    height: undefined,
    width: undefined,
    x: undefined,
    y: 0
}

var white = "#ffffff"

function draw() {
    background(gscale);
    //drawing my 3 rectangles
    drawRectangle(rectangle1.color,rectangle1.x,rectangle1.y,width/3,height);
    drawRectangle(rectangle2.color,width/3,rectangle2.y,width/3,height);
    drawRectangle(rectangle3.color,(width/3)*2,rectangle3.y,width/3,height)
    
    
}

function drawRectangle (color,x,y,w,h){
    noStroke();
    fill(color);
    rect(x,y,w,h)
    
}

if (mouseX < rectangle1.width){
    console.log("mouse hover working");
    rectangle1.color === white
}
