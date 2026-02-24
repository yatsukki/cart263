

class Bird extends Animal{
  // Create a new bird object that moves to the right

  constructor(x, y,width,height) {
    // Call the Animal's constructor()
    // Remember, it's called super() when we call it from a subclass
    super(x, y,width,height);
   // Set our properties to the specific bird values
    this.vx = Math.random() * 5 + 1;
    this.vy = 0;
    this.animalBody = document.createElement("div");
  }

// Display the bird as a ellipse
  renderAnimal() {
    // Remember to call the superclass' version of this method!
    super.renderAnimal();
    this.animalBody.classList.add("animal");
    this.animalBody.style.width = this.width + "px";
    this.animalBody.style.height = this.height + "px";
    this.animalBody.style.left = this.x + "px";
    this.animalBody.style.top = this.y + "px";
    this.animalBody.style.borderRadius = this.width + "px";
    this.animalBody.style.backgroundColor = `rgb(106, 90, 205)`;
    //add to the DOM
    document.getElementsByClassName("sky")[0].appendChild(this.animalBody);  
  }

  // Overriding the superclass' wrap() method!
  wrap() {
    // NEW! Call the superclass (Animal) version of wrap()
    // This will handle wrapping on the x axis for us.
    // We use "super" to access methods in the SUPERclass (Animal)
    // So this calls the Animal version of wrap() after we make the specific changes 
    // in the SUBclass.
   
    if (this.x > window.innerWidth) {
      //reset
      this.vy = 0;
    }
     super.wrap();
   }
   // Display the bird as a ellipse
  renderAnimal() {
    // Remember to call the superclass' version of this method!
    super.renderAnimal();
    this.animalBody.style.backgroundColor = `rgb(106, 90, 205)`;
    document.getElementsByClassName("sky")[0].appendChild(this.animalBody);
  }
}

