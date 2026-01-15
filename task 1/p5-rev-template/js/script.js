"use strict";




function setup() {
    console.log("go")
    createCanvas(500, 500);
    background (0);
    drawEllipse(12, 12, 12, 12, 12, 12, 12)

}

function draw() {
    fill("#fffffff")
    ellipse(30, 30, 40, 40)
    fill("rgba(223, 119, 255, 0.2)")
    ellipse(70, 80, 60, 60)
    fill("rgba(255, 0, 187, 1)")
    ellipse(120,120, 70, 70)

}

function drawEllipse(x,y,w,h,r,g,b){
    fill(r,g,b)
    ellipse(x,y,w,h)
}

