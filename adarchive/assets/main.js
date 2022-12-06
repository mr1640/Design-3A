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
   


console.log("Here")
document.body.addEventListener("scroll", (e)=>{
    console.log(document.body.scrollLeft, "here")
})