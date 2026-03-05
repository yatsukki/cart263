window.onload = setup;
function setup(){

    //grabbing the canvas
    const canvas = document.getElementsByClassName("drawingArea")[0]
    const ctx = canvas.getContext("2d")
    
    //drawing states
    let currentTool = null;
    let isDrawing = false;
    
    //grabbing the pencil button
    const pencilBtn = document.getElementById("pencil");
    
    pencilBtn.addEventListener("click",() => {
        console.log("Pencil selected");
        currentTool = "pencil";
    })

    //functions for the event listeners

    function onMouseMove(){
        console.log("poop.com")
    }
    function onMouseDown(){
        console.log("mouse is down")
    }
    function onMouseUp(){
        console.log("mouse has been released")       
    }

    //adding event listeners to actions 
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mousedown", onMouseDown)
    canvas.addEventListener("mouseup", onMouseUp)

    

}