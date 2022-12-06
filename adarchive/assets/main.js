var body = document.getElementsByTagName('body')[0];
        body.style.backgroundColor = 'green';

        // trigger this function every time the user scrolls
        window.onscroll = function (event) {
            var scroll = window.pageXOffset;
            if (scroll < 6000) {
                // green
                body.style.backgroundColor = 'green';
            } else if (scroll >= 600 && scroll < 12000) {
                // yellow
                body.style.backgroundColor = 'yellow';
            } else if (scroll >= 12000 && scroll < 20000) {
                // blue
                body.style.backgroundColor = 'blue';
            } else if (scroll >= 20000 && scroll < 25000) {
                // orange
                body.style.backgroundColor = 'orange';
            } else if (scroll >= 25000 && scroll < 450000) {
                // red
                body.style.backgroundColor = 'red';
            } else {
                // purple
                body.style.backgroundColor = 'purple';
            }
        }
   


console.log("Here")
document.body.addEventListener("scroll", (e)=>{
    console.log(document.body.scrollLeft, "here")
})