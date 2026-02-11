setup_C();
/** THEME: SERENITY  */
function setup_C() {
  console.log("in c");
  /**************************************************** */
  //get the buttons
  activateButtons(`#TEAM_C`, "ani_canvC",aniA,aniB,aniC,aniD);

  /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN A INSIDE HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in mouseclick event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function  -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
  
  function aniA(parentCanvas) {
    let Newbutton = document.createElement("button");

    Newbutton.id = 'cool-button';
    Newbutton.classList.add('stupid-button');



    Newbutton.textContent= 'Click';
    parentCanvas.appendChild(Newbutton);
    console.log("in ani-A -teamC");

    //changing button textContent
    let guuNumberCounter = 1;
    //creating container
    let guuContainer = document.createElement("div");
    
    
    //creating grid
    guuContainer.classList.add("guuGrid")
    guuContainer.style.width = "100%"
    guuContainer.style.height = "auto"
    guuContainer.style.display = "grid"
    
    
    Newbutton.addEventListener("click", function (e){
      
      //creating image
      let guu = document.createElement("img");
      //chaging attributes
      guu.classList.add("guuImage")      
      guu.style.display = "block"
      guu.style.width = "100%"
      guu.style.height = "100%"
      guu.setAttribute("src","guu.gif");
      

      

      //increasing gridsize along with clicks
      let gridSize = Math.ceil(Math.sqrt(guuNumberCounter));
      guuContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

      //parenting
      guuContainer.appendChild(guu)
      parentCanvas.appendChild(guuContainer);
      
      Newbutton.textContent = guuNumberCounter
      //fucntion to update button
      function updateStupidButton(){
        document.getElementById("cool-button").innerHTML = guuNumberCounter
      }
      
      //increasing number on button
      function incrementAC(){
        guuNumberCounter++
        updateStupidButton();
        console.log("shit is updated")
      }

      incrementAC();

    })
    
  }
  
  


  /****************ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN B INSIDE HERE */
  /****************ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creatve, visual pattern using text, divs as shapes, images ... 
   * 2: add in mouseover event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniB(parentCanvas) {
      console.log("in ani-B -teamC");
    
  }
  /****************ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE HERE */
  /****************ANI C************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
   * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
   * 
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
  
  /* TASK: make an interactive pattern .. colors, shapes, sizes, text, images....
  * using  ONLY key down and/or keyup -- any keys::
  */
 
 function aniC(parentCanvas) {
   console.log("in ani-C -teamC");
   
    /*** THIS IS THE CALLBACK FOR KEY DOWN (* DO NOT CHANGE THE NAME *..) */
    windowKeyDownRef = function (e) {
      //code for key down in here
      console.log(e);
      console.log("c-down");
    };

    /*** THIS IS THE CALLBACK FOR KEY UP (*DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
      console.log(e);
      console.log("c-up");
    };
    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
  }

   /****************ANI D************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN D INSIDE HERE */
  /****************ANI D************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in animation using requestAnimationFrame somewhere to make the sketch animate :)
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
   function aniD(parentCanvas) {
    //create button div
    document.querySelector.button

    console.log("in ani-D -teamC");
    }
}
   