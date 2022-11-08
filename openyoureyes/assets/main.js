// invert button function
let svgObj = document.getElementById("eye_svg");
svgObj.addEventListener("load",function(){
  let svgDoc = svgObj.contentDocument;
  let eye = svgDoc.getElementById("eye")
  eye.addEventListener("click", function(){
    document.body.toggleAttribute("invert")
  })
})

// wormhole alert box
let svgastro = document.getElementById("astro_svg");
svgastro.addEventListener("load",function(){
  let svgDoc = svgastro.contentDocument;
  let astro = svgDoc.getElementById("astro")
  astro.addEventListener("click", function(){
    if (confirm("wormholes?")){
      // true
      alert("wormholes are magical portals that are used for timetravel. We have been using them for years.");
    } else {
      // false
      alert("suit urself");
     // document.body.style.backgroundColor = "red";
    }
  })
})

// car alert box
let svgcar = document.getElementById("car_svg");
svgcar.addEventListener("load",function(){
  let svgDoc = svgcar.contentDocument;
  let car = svgDoc.getElementById("car")
  car.addEventListener("click", function(){
    alert("cars have been able to run on water since the 20th century");
  })
})

// bigfoot alert box
let svgfoot = document.getElementById("foot_svg");
svgfoot.addEventListener("load",function(){
  let svgDoc = svgfoot.contentDocument;
  let foot = svgDoc.getElementById("foot")
  foot.addEventListener("click", function(){
    alert("bigfoot is just naturally blurry.");
  })
})

// makeup alert box
let svgmake = document.getElementById("make_svg");
svgmake.addEventListener("load",function(){
  let svgDoc = svgmake.contentDocument;
  let make = svgDoc.getElementById("make")
  make.addEventListener("click", function(){
    alert("Makeup ruins the skin, forcing people to keep buying it");
  })
})

// rock alert box
let svgrock = document.getElementById("rock_svg");
svgrock.addEventListener("load",function(){
  let svgDoc = svgrock.contentDocument;
  let rock = svgDoc.getElementById("rock")
  rock.addEventListener("click", function(){
    alert("rocks are soft and squishy, but tense up when you touch them");
  })
})

// sim alert box
let svgsim = document.getElementById("sim_svg");
svgsim.addEventListener("load",function(){
  let svgDoc = svgsim.contentDocument;
  let sim = svgDoc.getElementById("sim")
  sim.addEventListener("click", function(){
    if (confirm("simulation?")){
      // true
      alert("Simulation theory posits the universe as we know it is an advanced digital construct overseen by some higher form of intelligence. We all live in a game of sims. This concept has been debated since the Enlightenment, but there is no definitive answer.");
    } else {
      // false
      alert("Ah, docka morpher");
     // document.body.style.backgroundColor = "red";
    }
  })
})

//time alert box
let svgtime = document.getElementById("time_svg");
svgtime.addEventListener("load",function(){
  let svgDoc = svgtime.contentDocument;
  let time = svgDoc.getElementById("time")
  time.addEventListener("click", function(){
    if (confirm("do you remember last thursday")){
      // true
      alert("Last Thursdayism (alternately Last Tuesdayism or Last Wednesdayism) is the idea that the universe was created last Thursday, but with the physical appearance of being billions of years old. It's also a counter to the creationism theory");
    } else {
      // false
      alert("sus");
     // document.body.style.backgroundColor = "red";
    }
  })
})




// const invertBtn = document.getElementById("invrteye")
// invertBtn.addEventListener("click", function(event){
//   console.log(event.target)
//   if (!event.target.closest('#invrteye')) console.log(event.target);
//   document.body.toggleAttribute("invert")
// })
