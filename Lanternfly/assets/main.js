

//select all the instances of the lantern class in the html document 
const lanterns = document.querySelectorAll(".lantern")

//var onClick = (event) => {
  //var lanternFly = document.getElementById(event.target.id);
  //console.log(lanternFly)
//}
//window.addEventListener('click', onClick);



function handleClickOnFly (element) {
  let widthOfBody = document.body.offsetWidth
  let heightOfBody = document.body.offsetHeight

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


// function handleClickOnCircle2 () {

//   circle2.addEventListener('click', function () {
//     // these variables holds the width and height of the body
//     let widthOfBody = document.body.offsetWidth
//     let heightOfBody = document.body.offsetHeight

//     //  get random x and y position from the width and height of the body
//     let x = Math.floor(Math.random() * widthOfBody)
//     let y = Math.floor(Math.random() * heightOfBody)

//     // we would use css transform to move the object within the body
//     // circle.style.transform = "translate(" + x + "px, " + y + "px )"
//     // this is the same as above but we are are inlining the javascript variables
//     circle2.style.transform = `translate( ${x}px, ${y}px)`
//   })
// }

// handleClickOnCircle2()

// function handleClickOnCircle3 () {

//   circle3.addEventListener('click', function () {
//     // these variables holds the width and height of the body
//     let widthOfBody = document.body.offsetWidth
//     let heightOfBody = document.body.offsetHeight

//     //  get random x and y position from the width and height of the body
//     let x = Math.floor(Math.random() * widthOfBody)
//     let y = Math.floor(Math.random() * heightOfBody)

//     // we would use css transform to move the object within the body
//     // circle.style.transform = "translate(" + x + "px, " + y + "px )"
//     // this is the same as above but we are are inlining the javascript variables
//     circle3.style.transform = `translate( ${x}px, ${y}px)`
//   })
// }

// handleClickOnCircle3()



// function handleClickOnCircle4 () {

//   circle4.addEventListener('click', function () {
//     // these variables holds the width and height of the body
//     let widthOfBody = document.body.offsetWidth
//     let heightOfBody = document.body.offsetHeight

//     //  get random x and y position from the width and height of the body
//     let x = Math.floor(Math.random() * widthOfBody)
//     let y = Math.floor(Math.random() * heightOfBody)

//     // we would use css transform to move the object within the body
//     // circle.style.transform = "translate(" + x + "px, " + y + "px )"
//     // this is the same as above but we are are inlining the javascript variables
//     circle4.style.transform = `translate( ${x}px, ${y}px)`
//   })
// }

// handleClickOnCircle4()

// function handleClickOnCircle5 () {

//   circle5.addEventListener('click', function () {
//     // these variables holds the width and height of the body
//     let widthOfBody = document.body.offsetWidth
//     let heightOfBody = document.body.offsetHeight

//     //  get random x and y position from the width and height of the body
//     let x = Math.floor(Math.random() * widthOfBody)
//     let y = Math.floor(Math.random() * heightOfBody)

//     // we would use css transform to move the object within the body
//     // circle.style.transform = "translate(" + x + "px, " + y + "px )"
//     // this is the same as above but we are are inlining the javascript variables
//     circle5.style.transform = `translate( ${x}px, ${y}px)`
//   })
// }

// handleClickOnCircle5()

// function handleClickOnCircle6 () {

//   circle6.addEventListener('click', function () {
//     // these variables holds the width and height of the body
//     let widthOfBody = document.body.offsetWidth
//     let heightOfBody = document.body.offsetHeight

//     //  get random x and y position from the width and height of the body
//     let x = Math.floor(Math.random() * widthOfBody)
//     let y = Math.floor(Math.random() * heightOfBody)

//     // we would use css transform to move the object within the body
//     // circle.style.transform = "translate(" + x + "px, " + y + "px )"
//     // this is the same as above but we are are inlining the javascript variables
//     circle6.style.transform = `translate( ${x}px, ${y}px)`
//   })
// }

// handleClickOnCircle6()



//onClick()




//plan on changing images 
//need to figure out how to change image when hovered over
//want to see how to make image "float" across page other than just making it re appear
//rotate on hover 
//is there a way i can make the 2nd mage stay for the duartion of transition
//how can he face random direction everytime
//have a bunch of them?