// invert button function
let svgObj = document.getElementById("eye_svg");
svgObj.addEventListener("load",function(){
  let svgDoc = svgObj.contentDocument;
  let eye = svgDoc.getElementById("eye")
  eye.addEventListener("click", function(){
    document.body.toggleAttribute("invert")
  })
})

// const invertBtn = document.getElementById("invrteye")
// invertBtn.addEventListener("click", function(event){
//   console.log(event.target)
//   if (!event.target.closest('#invrteye')) console.log(event.target);
//   document.body.toggleAttribute("invert")
// })
