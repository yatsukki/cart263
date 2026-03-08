window.onload = setup;
function setup(){

    
    
    //grabbing the cat button
    const catBtn = document.getElementById("neko");

    var defaultCat = "media/cat-default.png";
    var hoverCat = "media/cat-hover.png"
    var clickCat = "media/cat-pressed.png"
    var source = catBtn.src;
    

    
    //functions for the event listeners
    
    function onMouseOver(){
        console.log("hovering...")
        catBtn.src = hoverCat
    }
    function onMouseDown(){
        console.log("meow")
        setTimeout(() => {
        console.log("loading...");
        catBtn.src = clickCat
        window.open("https://cataas.com/cat/gif")
        }, 200);
    }
    function onMouseUp(){
        console.log("mouse has been released")       
        catBtn.src = hoverCat
    }
    function onMouseOut(){
        console.log("mouse is out")       
        catBtn.src = defaultCat
    }
    function onClick(){
        console.log("clicked")       
        catBtn.src = clickCat
    }

    //adding event listeners to actions 
    catBtn.addEventListener("mouseover", onMouseOver)
    catBtn.addEventListener("mousedown", onMouseDown)
    catBtn.addEventListener("mouseup", onMouseUp)
    catBtn.addEventListener("mouseout", onMouseOut)
    catBtn.addEventListener("click", onClick)

    

}