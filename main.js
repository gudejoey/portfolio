var lastScrollY = window.pageYOffset;
var nav = document.querySelector(".nav");
// var logo = document.querySelector(".logo");
var body = document.getElementById("body");

var html=document.querySelector("html");




window.onscroll = function(){
    
    if (window.scrollY > lastScrollY && window.scrollY > 64) {
        // anime({
        //     target: ".nav",
        //     translateY: 600,
        // });
        nav.classList.add("hide");
    }
    else {
        // anime({
        //     target: ".nav",
        //     translateY: -600,
        // });
        nav.classList.remove("hide");
    }

    // update to the current value
    lastScrollY = window.scrollY;
    
}