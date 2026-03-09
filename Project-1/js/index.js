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

    const catFrame = document.createElement("img")
    const catImage = document.createElement("img")

    //giving classes to elements
    catFrame.classList.add('cat-frame')
    catImage.classList.add('cat-image')

    //giving image source
    catFrame.src = 'media/cat-frame.png'
    catImage.src = 'https://cataas.com/cat/gif'



    //appending elements

    const displayContainer = document.getElementById("displayContainer")

    catFrame.appendChild(catImage)
    displayContainer.appendChild(catFrame)

    function onMouseDown(){
        console.log("meow")
        //delaying it so we can see the button being pressed
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