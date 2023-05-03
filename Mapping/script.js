const eyeball = document.getElementById("eyeball");

document.addEventListener("mousemove", function(event) {
  // calculate distance and angle from center of eyeball to cursor position
  const rect = eyeball.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const dx = event.clientX - centerX;
  const dy = event.clientY - centerY;
  const distance = Math.sqrt(dx*dx + dy*dy);
  const angle = Math.atan2(dy, dx);
  
  // limit distance to radius of eyeball
  const radius = rect.width / 2;
  const x = centerX + Math.cos(angle) * Math.min(distance, radius);
  const y = centerY + Math.sin(angle) * Math.min(distance, radius);
  
  // move eyeball to new position
  eyeball.style.left = x + "px";
  eyeball.style.top = y + "px";
});





// other ball

// const eyeball2 = document.getElementById("eyeball2");
// const pupil = document.getElementById("pupil");
// const radius = eyeball.clientWidth;

// document.addEventListener("mousemove", function(event) {
//   // calculate distance and angle from center of eyeball to cursor position
//   const dx = event.clientX - eyeball.offsetLeft - radius;
//   const dy = event.clientY - eyeball.offsetTop - radius;
//   const distance = Math.sqrt(dx*dx + dy*dy);
//   const angle = Math.atan2(dy, dx);
  
//   // move pupil to new position based on angle and distance
//   const maxDistance = radius - pupil.offsetWidth;
//   const x = radius + Math.cos(angle) * Math.min(distance, maxDistance);
//   const y = radius + Math.sin(angle) * Math.min(distance, maxDistance);
//   pupil.style.left = x + "px";
//   pupil.style.top = y + "px";
// });




// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");

// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;
// const radius = 50;
// const innerRadius = 20;

// canvas.addEventListener("mousemove", function(event) {
//   const rect = canvas.getBoundingClientRect();
//   const mouseX = event.clientX - rect.left;
//   const mouseY = event.clientY - rect.top;

// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;
// const radius = 50;
// const innerRadius = 20;

// ctx.beginPath();
// ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
// ctx.fillStyle = "#eee";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
// ctx.fillStyle = "#333";
// ctx.fill();
// ctx.closePath();

//   // Calculate the distance from the center of the canvas to the cursor position
//   const distance = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));

//   // If the cursor is inside the larger circle, draw the smaller circle at the cursor position
//   if (distance <= radius) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.beginPath();
//     ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
//     ctx.fillStyle = "#eee";
//     ctx.fill();
//     ctx.closePath();

//     ctx.beginPath();
//     ctx.arc(mouseX, mouseY, innerRadius, 0, 2 * Math.PI);
//     ctx.fillStyle = "#333";
//     ctx.fill();
//     ctx.closePath();
//   }
// //   else (distance => radius){

// //   }
// });
console.log('event');

let texts = document.querySelectorAll(".text");

for (let i=0;i<texts.length;i++){
    texts[i].style.backgroundColor = "#"+i+i+i+i+i+i;
    texts[i].style.left = i*50 + "px";
    texts[i].style.color = "#"+(9-i)+(9-i)+(9-i)+(9-i)+(9-i)+(9-i);
    texts[i].style.animationDelay = i*150 + "ms";
  }

  document.addEventListener("mousemove", function(e){
    if (document.querySelectorAll(".text").length > 50){
      let firstText = document.querySelector(".text:first-child");
      firstText.remove();
    }
  
  
    let newElem = document.createElement("text");
    newElem.classList.add("text");
    newElem.innerHTML = "<img src=\"assets/spam.png\" width=\"100px\" height=\"200px\">"
    newElem.style.left = e.clientX + "px";
    newElem.style.top = e.clientY + "px";
    document.getElementById("container").appendChild(newElem)
  })