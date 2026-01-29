

window.onload = setup;

/** function setup */
function setup(){
console.log("we are a go!")
/*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
/*** START PART ONE ACCESS */ 
/* 1: all paragraph elements */
/***CODE */
// console.log(document.getElementsByTagName("p"))
// /***OUTPUT: fetched elements with tag named p
//  * 
//  */

// /*************************************** */
// /* 2: only the first paragraph element */
// /***CODE */
// console.log(document.getElementsByTagName("p")[0])
// /***OUTPUT: fetch the very first element within all elements with p tag
//  * 
//  */

// /*************************************** */
// /* 3: all elements with the class inner-container */
// /***CODE */
// console.log(document.getElementsByClassName("inner-container"))
// /***OUTPUT:  fetched all elements with inner-container class name
//  * 
//  */

// /*************************************** */
// /* 4: the last image element inside the element that has the class img-container */
// /***CODE */
// lastImg = document.getElementsByClassName("inner-container").length

// console.log(lastImg - 1)
// /***OUTPUT: fetched the last image within the array of inner-container thanks to the .lenght property, also added -1 cause arrays are just like this for no reason
//  * 
//  */

// /*************************************** */
// /* 5A: all h2 elements */
// /* 5B: length of the list in 5A */
// /* 5C: the text content of the first element in the list from 5A */
// /***CODE */
// console.log(document.getElementsByTagName("h2"))

// last5b = document.getElementsByClassName("5").length
// console.log(last5b)

// console.log(document.getElementsByTagName("h2")[0].textContent)
// /***OUTPUT:  got all elements with tag name h2, then got to know the number of items in the array in 5B, and finally got the text content inside of the very first item in the array of h2
//  * 
//  */


// /*************************************** */
// /* 6: the element with id name parent */

// /***CODE */console.log(document.getElementById("parent"))
// /***OUTPUT: fetched the element with the id named parent
//  * 
//  */

// /*************************************** */
// /*** END PART ONE ACCESS */ 


// /*************************************** */
// /*** START PART TWO MODIFY */ 
// /*************************************** */
// /* 1: Select the first paragraph and replace the text within the paragraph... */
// /***CODE */

// document.getElementById("2").innerHTML = "<p> New text in paragraph one: text changed by `your name` on the following date: `today's date`. </p>";
// /*************************************** */
// /* 2: Select all elements in the HTML that have the class name content-container
//  and change the background color ... of first and second ...*/
// /***CODE */
// document.getElementsByClassName("content-container")[0].style.background = 'orange';
// document.getElementsByClassName("content-container")[1].style.background = 'purple';

// /*************************************** */
// /* 3: Change the src element of the first image element on the page to be ...
// /***CODE */
// document.getElementsByClassName("img-image")[0].src="task-2-images/seven.png"
// /*************************************** */
// /* 4: Select the third paragraph element on the page and 
// replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
// /***CODE */
// document.getElementById("4").innerHTML = "<h2> TEST 123 </h2>"

/*************************************** */
/* 5: Select the fourth paragraph element on the page and 
add to the existing content an h2 element containing the text `TEST 123`
/***CODE */
// var paragraph = document.getElementById("5")
// var text = "<h2> TEST 123 </h2>"

// paragraph.innerHTML += text
/*************************************** */
/* 6: Select the fifth paragraph element on the page and add to the existing content 
an img element that holds `one.png`, and add the class newStyle to said paragraph element.
/***CODE */

// var newImg = document.createElement("img")
// //giving a source to our new img element
// newImg.setAttribute('src', 'task-2-images/one.png')


// document.getElementById("6").appendChild(newImg)


/*************************************** */
/* 7: Add the following array variable: let colors = ['red','blue','green','orange'];, 
then access all elements with class name inner-container and save to a variable called `innerContainers`. 
Next, iterate over the colors array, and for each color: 
assign the element from innerContainers variable with the same index 
(i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
a background using that color.
/***CODE */

// let colors = ['red','blue','green','orange'];
// var innerContainers = document.getElementsByClassName("inner-container");




/*************************************** */
/*** END PART TWO MODIFY */ 


/*************************************** */
/*** START PART THREE CREATE */ 
/*************************************** */
/* 1: NEW PARAGRAPHS */
/* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
/* 1B: Create a function:function customCreateElement(parent){ //body } */
/* 1C:  In the body of customCreateElement create a new parargraph element*/
/* 1D:  Set the text of this element to be : `using create Element`*/
/* 1E:  Set the background of this paragraph element to be green */
/* 1F:  Set the color of the text in this paragraph element to be white */
/* 1G: Append this new element to the parent variable within the function. */
/* 1H: Iterate through the allPTagsThree array and call customCreateElement(), 
passing the current allPTagsThree element as the parent with each iteration.*/
/***CODE */
var allPTagsThree = document.getElementsByClassName("p")
console.log(allPTagsThree)


function customCreateElement(parent){

    let newP= document.createElement("p")
    newP.textContent = "using create element"
    parent.appendChild(newP)
}


/***EXPLANATION::
 * 
 * 
 */

/*************************************** */
/* 2: GRID OF BOXES */
/* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
/* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv. 
/* 2C:Then append this new element to the parent variable within the function. 
/* 2D:Finally, return</code> this new element */
/* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)). 
    Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
    Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
/* 2F: You will see at this point that the x,y position of the resulting divs makes no sense... 
    Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
    in a variable i.e. returnedDiv. 
    Set the style (left and top) to the of this element to 
    the necessary x and y position (use the counter variables in the for nested for loop to 
    calculate the new positions.
/* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
    and otherwise let it have a background of purple.</li>
/* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
    otherwise lat it have the content `ODD`.*/

/***CODE */

function customNewBoxCreate (parent){
    let newDiv = document.createElement("div")
    //adding class to newDiv
    newDiv.classList.add("testDiv")
    parent.appendChild(newDiv);

    return newDiv
}

let parent = document.querySelector("#new-grid")
//making 10 by 10 grid with the help of a loop
for (let x=0; x<10; x++){
    for (let y=0; y<10; y++){
     /*just add let "whatever" = if you want it to rerturn  */ let returnedDiv =  customNewBoxCreate(parent);
     returnedDiv.style.top = y*40+"px"; //make sure to add the measurement or else it wont change shit
     returnedDiv.style.left = x*40+"px";
    }
}
/***EXPLANATION::
 * 
 * 
 */

/*************************************** */
/* 3: GRID OF BOXES II */

/* 3A: Create ANOTHER nested for loop - in order to generate a new grid ... 
    USE the same customNewBoxCreate function..., the only difference is that the parent element 
    for each of these new divs is the element whose id is `new-grid-three`. */
/* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder), 
    when it is a column where the remainder is 1 or when the remainder is 2 ... 
    HINT:: look up the % operator.. */
/* 3C: Then for each of the above cases: give the new divs in the first case a background of red, 
        then the second a background of orange and the third yellow. */
/*  3D: Finally, let each div contain the text content representing the associated remainder 
    when dividing by three. */

/***CODE */


/***EXPLANATION::
 * 
 * 
 */

/*************************************** */
/*** END PART THREE CREATE */ 
/*************************************** */
    




}