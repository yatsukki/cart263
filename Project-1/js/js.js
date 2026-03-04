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
        console.log("hello");
        currentTool = "pencil";
    })







}