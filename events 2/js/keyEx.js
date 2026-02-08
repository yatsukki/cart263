
window.onload = function(){
    console.log("keys");


    let speedX=5;

    window.addEventListener("keydown", function (event) {
  console.log(event);
  // selecting textContainer and adding whatever we typed in
  document.querySelector("#textContainer").textContent+=`${event.key} `;

   if (event.key === "ArrowRight") {
    //selecting the element id boxA's sty;es and position and adding the amount of px with the speed (speedX)
      document.getElementById("boxA").style.left =
        parseInt(document.getElementById("boxA").style.left) + speedX + "px";
    //Same thing but the other way around
   }

   
else if (event.code === "Space") {
      let bool = document.getElementById("boxB").getAttribute("custom-bool");
      if (bool === "off") {
        document.getElementById("boxB").style.background = "orange";
        document.getElementById("boxB").setAttribute("custom-bool", "on");
      } else {
        document.getElementById("boxB").style.background = "rgb(112, 184, 226)";
        document.getElementById("boxB").setAttribute("custom-bool", "off");
      }
    }
   
   
   
   //  else if (event.key === "ArrowLeft") {
    //   document.getElementById("boxA").style.left =
    //     parseInt(document.getElementById("boxA").style.left) - speedX + "px";
    // }

    //  else if(event.code ==="Space"){
    //     document.getElementById("boxB").style.background = "orange";
    
    // }

    
});


}

