
window.onload = setup;
function setup(){
    console.log("events!")
    let introState = "off"
    let s1State = "off"

    // let introSection = document.querySelector("#intro")
    // //adding element to make it clickable
    // introSection.addEventListener("click", mouseClickCallback) //mouseclickcallback is a custom fucnntion btw, we gotta mkake our own callbacks

    // let s1 = document.querySelector("#s1");
    // s1.addEventListener("click", mouseClicks1Callback)


    let allSections = document.querySelectorAll (".mouseclick-active-section")
    for (let currentSection of allSections){
        currentSection.addEventListener("click", mouseClickCallback)
    }

    //this is what the callback function is going to do once i click it
    function mouseClickCallback(eventObj){
        console.log("clicked");
        console.log(this);
        console.log(eventObj);
        // this.style.background="blue";

        let idOfThis = this.getAttribute("id");
        // console.log(document.querySelector(`#${+idOfThis+} p`))
        //we're getting the value out of whatever inside the curly brackets
        
        if (this.getAttribute("custom-bool") === "inactive"){

            let child = document.querySelector(`#${idOfThis} p`);
            let classToAdd = `${idOfThis}-section-active`
            this.classList.add(classToAdd)
            let classToAddP = `${idOfThis}-section-p-active`
            child.classList.add(classToAddP)
            console.log(this.getAttribute("custom-bool"))
            this.setAttribute("custom-bool", "active")
            //you activate it by typing double quotations in here, not equal. also with the help of setAttribute
        }

        else {
             let child = document.querySelector(`#${idOfThis} p`);
            let classToAdd = `${idOfThis}-section-active`
            this.classList.add(classToAdd)
            let classToAddP = `${idOfThis}-section-p-active`
            child.classList.add(classToAddP)
            console.log(this.getAttribute("custom-bool"))
            this.setAttribute("custom-bool", "inactive")
        }
    }
    
    function mouseClicks1Callback(){
        console.log("s1 clicked")
       

    }
}