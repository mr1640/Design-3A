function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  let x = 0;
  let y = 0;
  
  while (x < width && y < height) {
    // statements
     let mover = x*100;
    let movery = y*100;
     

  eyeball(mouseX,mouseY,0,mover,255);
  eyeball(mouseX/2,mouseY,windowWidth/4,mover,255);
  eyeball(mouseX/3,mouseY,windowWidth/2,mover,255);
  eyeball(mouseX,mouseY/2,0,windowHeight/4,255);
  eyeball(mouseX/2,mouseY/2,windowWidth/4,windowHeight/4,255);
  eyeball(mouseX/3,mouseY/2,windowWidth/2,windowHeight/4,255);
    x += 100;
    y += 100;
  }
  
// for(let x = 0;x<width;x+=100
//    y = 0;x<width;x+=100) 
//     {
//  let mover = x*100 

//   eyeball(mouseX,mouseY,0,mover,255);
//   eyeball(mouseX/2,mouseY,windowWidth/4,mover,255);
//   eyeball(mouseX/3,mouseY,windowWidth/2,mover,255);
//   eyeball(mouseX/3,mouseY,windowWidth/2,mover,255);
// }
 

}

function eyeball(mx,my,tx,ty,col){
  push()
  translate(tx,ty)  
  //whites ofeye
  noStroke();
  fill(col);
  circle(height/4,height/4,windowHeight/5);
  //iris
  let xc =constrain(mx, windowHeight/4.5, windowHeight/3.35);
  let xs = constrain(my, windowHeight/4.5,windowHeight/3.35);
  fill(0);
  circle(xc,xs,windowHeight/10);
  //glare
  fill(255);
  circle(xc+20,xs-20,windowHeight/25);
  pop()
}