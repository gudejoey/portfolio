var lastScrollY = window.pageYOffset;
var nav = document.querySelector(".nav");
// var logo = document.querySelector(".logo");
var body = document.getElementById("body");
const logo = document.getElementById('logo');
var html=document.querySelector("html");
var circl=document.getElementById('circl');
const phone = window.matchMedia('(max-width: 480px)').matches;
const tablet = window.matchMedia('(min-width: 481px) and (max-width: 767px)').matches;
const touch = window.matchMedia("(pointer: coarse)").matches;







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