



//backgound color

var body = document.getElementsByTagName('body')[0];
        body.style.backgroundColor = 'green';

        // trigger this function every time the user scrolls
        window.onscroll = function (event) {
            var scroll = window.pageXOffset;
            if (scroll < 10000) {
                // green
                body.style.backgroundColor = '#001118';
            } else if (scroll >= 10000 && scroll < 20000) {
                // yellow
                body.style.backgroundColor = '#015f73';
            } else if (scroll >= 20000 && scroll < 30000) {
                // blue
                body.style.backgroundColor = '#089396';
            } else if (scroll >= 30000 && scroll < 40000) {
                // orange
                body.style.backgroundColor = '#93d2bd';
            } else if (scroll >= 40000 && scroll < 50000) {
                // red
                body.style.backgroundColor = '#e8d7a6';
            }
            else if (scroll >= 50000 && scroll < 60000) {
                // red
                body.style.backgroundColor = '#ed9b00';
            }else if (scroll >= 60000 && scroll < 70000) {
                // red
                body.style.backgroundColor = '#ca6701';
            } else if (scroll >= 70000 && scroll < 80000) {
                // red
                body.style.backgroundColor = '#bb3d03';
            }  else if (scroll >= 80000 && scroll < 90000) {
                // red
                body.style.backgroundColor = '#ad2111';
            }else if (scroll >= 90000 && scroll < 100000) {
                // red
                body.style.backgroundColor = '#992125';
            }else {
                // purple
                body.style.backgroundColor = '#992125';
            }
        }
   

//sideways scroll
function transformscroll(event){
    if(!event.deltaY) return;
    event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
}

let scrollDiv = document.scrollingElement || document.documentElement;
scrollDiv.addEventListener( "wheel", transformscroll);

//button function
const bttn = document.getElementById('button');
const girls = document.querySelectorAll(".she");
const others= document.querySelectorAll(".other");
bttn.addEventListener("click", invrt);

invertSwitch = true

function invrt(){
if (invertSwitch) {
    //change all girl images  
        for (let i = 0; i < girls.length; i++) {
            girls[i].style.filter = "saturate(1000%)";
        }
   ////change all other images  
        for (let i = 0; i < others.length; i++) {
            others[i].style.filter = "grayscale(1000%)";
        }
   
        invertSwitch = false;
    } 

  else {
        for (let i = 0; i < girls.length; i++) {
            girls[i].style.filter = "saturate(1)"
        }
    ////change all other images  
        for (let i = 0; i < others.length; i++) {
            others[i].style.filter = "saturate(1)";
        }

        invertSwitch = true;
    }
    console.log(invertSwitch)

}






// invertSwitch = true;

// function invrt() {

//     if (invertSwitch) {
//         for (let i = 0; i < girls.length; i++) {
//             girls[i].style.filter = "saturate(1000%)";
//         }
//         invertSwitch = false;
//     } else {
//         for (let i = 0; i < girls.length; i++) {
//             girls[i].style.filter = "saturate(1)"
//         }
//         invertSwitch = true;
//     }
//     console.log(invertSwitch)
// }








// const bttn = document.getElementById('button');
// const girls = document.querySelectorAll(".she");
// const all = document.getElementsByTagName('img')
// bttn.addEventListener("click",invrt);

// var toggled = false;

// function invrt(){


//     for (let i = 0; i < girls.length; i++) {
//         girls[i].style.filter = "saturate(1000%)";
//       }
//     for (let i = 0; i < girls.length; i++){
//         // girls[i].children('img').style.opacity = '100%';
//         girls[i].style.opacity = "100%";
//     }
// }
//  console.log(all)

