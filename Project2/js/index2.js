
let startButton = document.querySelector("#startButton")

startButton.addEventListener("mouseover", startHover)
startButton.addEventListener("mouseout", startOut)

function startHover(){
    startButton.style.backgroundPosition = "0px 30px"
    console.log("mouse hovered")
}

function startOut(){
    startButton.style.backgroundPosition = "0px 0px"
    console.log("mouse out")
}
