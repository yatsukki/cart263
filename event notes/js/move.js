
window.onload = function(){
    console.log("move!");

  let rect = document.querySelector("#draw-box-a")
  let pointDiv = this.document.createElement()
 .getBoundingClientRect()
   .addEventListener("mousemove",mouseMoveFunction)


   function mouseMoveFunction(eventObj){
       console.log("moving");
       console.log(eventObj)
       
       //difference to ensure coords are relative
    let offsetX = eventObj.clientX-rect.x;
    let offsetY = eventObj.clientY-rect.y;

    this.innerHTML =
    `x: ${offsetX}, y:${offsetY}`;
    pointDiv.style.top = offsetY
   }
};

// i give up