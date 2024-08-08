function setup() {
    createCanvas(600, 600);
    background("black");    
    
  }
  
  function draw() {
    
    
    stroke("purple");
    fill("red");
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 45);
    }
  }