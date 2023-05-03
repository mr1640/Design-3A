function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  //whites ofeye
  noStroke();
  fill(255);
  circle(height/2,height/2,windowHeight/2.5);
  //iris
  let xc =constrain(mouseX, windowWidth/5.3, windowWidth/3.4);
  let xs = constrain(mouseY, windowHeight/2.8,windowHeight/1.8);
  fill(0);
  circle(xc,xs,windowHeight/5);
  //glare
  fill(255);
  circle(xc+20,xs-20,windowHeight/25);
  
 
  
  translate(windowWidth/3,0);
  

  //whites ofeye
  noStroke();
  fill(255);
  circle(height/2,height/2,windowHeight/2.5);
  //iris
  let xc2 =constrain(mouseX-windowWidth/3, windowWidth/5.3, windowWidth/3.4);
  let xs2 = constrain(mouseY, windowHeight/2.8,windowHeight/1.8);
   fill(0);
  circle(xc2,xs2,windowHeight/5);
  //glare
  fill(255);
  circle(xc2+20,xs2-20,windowHeight/25);
  
  // push();
  //   translate(windowWidth/4,windowHeight/4);
  

  // //whites ofeye
  // noStroke();
  // fill(255);
  // circle(height/2,height/2,windowHeight/2.5);
  // //iris
  // fill(0);
  // circle(xc,xs,windowHeight/5);
  // //glare
  // fill(255);
  // circle(xc+20,xs-20,windowHeight/25);
  // pop();
  
  // push();
  //     translate(windowWidth/2,0);
  

  // //whites ofeye
  // noStroke();
  // fill(255);
  // circle(height/2,height/2,windowHeight/2.5);
  // //iris
  // fill(0);
  // circle(xc,xs,windowHeight/5);
  // //glare
  // fill(255);
  // circle(xc+20,xs-20,windowHeight/25);
  // pop();

  

}