//select all the instances of the lantern class in the html document 
const lanterns = document.querySelectorAll(".lantern1")

//var onClick = (event) => {
  //var lanternFly = document.getElementById(event.target.id);
  //console.log(lanternFly)
//}
//window.addEventListener('click', onClick);



function handleClickOnFly (element) {
  let widthOfBody = document.querySelector("#scroll").offsetWidth
  let heightOfBody = document.querySelector("#scroll").offsetHeight

  let x = Math.floor(Math.random() * widthOfBody)
  let y = Math.floor(Math.random() * heightOfBody)

  element.style.transform = `translate( ${x}px, ${y}px)`

  element.addEventListener('click', function () {
    // these variables holds the width and height of the body
  

    //  get random x and y position from the width and height of the body
     x = Math.floor(Math.random() * widthOfBody)
     y = Math.floor(Math.random() * heightOfBody)

    // we would use css transform to move the object within the body
    // circle.style.transform = "translate(" + x + "px, " + y + "px )"
    // this is the same as above but we are are inlining the javascript variables
    element.style.transform = `translate( ${x}px, ${y}px)`
  })
}

// lanterns.forEach(handleClickOnCircle)
lanterns.forEach(function(lantern){
  handleClickOnFly(lantern)
})

// invert button function
const invertBtn = document.getElementById("invrtbttn")
invertBtn.addEventListener("click", function(){
  document.body.toggleAttribute("invert")
})
