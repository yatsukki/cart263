"use strict";
// variables outside of functions are readable by every function
const s1x = 0;
const s1y = 0;




function setup() {
    console.log("go")
    createCanvas(500, 500);
    background (100);
   /* drawEllipse(12, 12, 12, 12, 12, 12, 12) //always use the parameters in the same order as you created them in ur function parantheses
    drawEllipse( 50, 50, 20, 20 ,20 ,20 ,20)
    drawEllipse( 80, 80, 30, 30 ,20 ,20 ,20)*/
    drawSquare(12, 12, 50)
    drawSquare(70, 70, 80)
    drawSquare(180, 180, 100)
}

function draw() {
   /* fill("#fffffff")
    ellipse(30, 30, 40, 40)
    fill("rgba(223, 119, 255, 0.2)")
    ellipse(70, 80, 60, 60)
    fill("rgba(255, 0, 187, 1)")
    ellipse(120,120, 70, 70) */

}

function drawEllipse(x,y,w,h,r,g,b){
    fill(r,g,b)
    ellipse(x,y,w,h)
}

function drawSquare (x,y,s,r,g,b){
    fill(r,g,b)
    square (x,y,s)
}
