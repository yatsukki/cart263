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

    //fetching image

    let catFrameDiv = document.createElement("div")
    let catFrame = document.createElement("img")

    //giving classes to elements
    catFrame.classList.add('cat-frame')
    catFrameDiv.classList.add('cat-frame-div')
    //giving image source
    catFrame.src = 'media/cat-frame.gif'
    
    //appending elements
    
    const displayContainer = document.getElementById("displayContainer")
    
    displayContainer.appendChild(catFrameDiv)
    catFrameDiv.appendChild(catFrame)
    
    
    //Mouse click
    
    function onMouseDown(){
        console.log("meow")
        
        //creating gif
        const catImage = document.createElement("img")
        catImage.classList.add('cat-image')
        //giving image source
        catImage.src = 'https://cataas.com/cat/gif'
        //appending
        catFrameDiv.appendChild(catImage)

        //switching buttons
        catBtn.src = clickCat
        
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
        
    }

    //adding event listeners to actions 
    catBtn.addEventListener("mouseover", onMouseOver)
    catBtn.addEventListener("mousedown", onMouseDown)
    catBtn.addEventListener("mouseup", onMouseUp)
    catBtn.addEventListener("mouseout", onMouseOut)
    catBtn.addEventListener("click", onClick)

    

}