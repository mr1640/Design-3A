function setup() {
    createCanvas(windowWidth/.7, windowHeight);
  }
  
  function draw() {
    background(0);
    //whites ofeye
    noStroke();
    fill(255);
    circle(height/2,height/2,windowHeight/2.5);
    //iris
    let xc =constrain(mouseX, windowHeight/2.3, windowHeight/1.8);
    let xs = constrain(mouseY, windowHeight/2.5,windowHeight/2);
    fill(0);
    circle(xc,xs,windowHeight/5);
    //glare
    fill(255);
    circle(xc+20,xs-20,windowHeight/25);
    
   
    
    translate(windowWidth/3.7,0);
    
  
    //whites ofeye
    noStroke();
    fill(255);
    circle(height/2,height/2,windowHeight/2.5);
    //iris
     let xc2 =constrain(mouseX-100, windowHeight/2.3, windowHeight/1.8);
    let xs2 = constrain(mouseY, windowHeight/2.5,windowHeight/2);
     fill(0);
    circle(xc2,xs2,windowHeight/5);
    //glare
    fill(255);
    circle(xc2+20,xs2-20,windowHeight/25);
    
      translate(windowWidth/3.7,0);
    
  
    //whites ofeye
    noStroke();
    fill(255);
    circle(height/2,height/2,windowHeight/2.5);
    //iris
    fill(0);
    circle(xc,xs,windowHeight/5);
    //glare
    fill(255);
    circle(xc+20,xs-20,windowHeight/25);
    
        translate(windowWidth/4.5,0);
    
  
    //whites ofeye
    noStroke();
    fill(255);
    circle(height/2,height/2,windowHeight/2.5);
    //iris
    fill(0);
    circle(xc,xs,windowHeight/5);
    //glare
    fill(255);
    circle(xc+20,xs-20,windowHeight/25);
    
  
    
  
  }