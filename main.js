var lastScrollY = window.pageYOffset;
var nav = document.querySelector(".nav");
// var logo = document.querySelector(".logo");
var body = document.getElementById("body");
const logo = document.getElementById('logo');
var dark=document.getElementById('dark');
var html=document.querySelector("html");
var circl=document.getElementById('circl');
const phone = window.matchMedia('(max-width: 480px)').matches;
const tablet = window.matchMedia('(min-width: 481px) and (max-width: 767px)').matches;
const touch = window.matchMedia("(pointer: coarse)").matches;
var fun=true;
var heyo=document.getElementById("heyo");
var cover=document.getElementById("cover");
var hi=document.getElementById("hi");
var loader=document.getElementById("loader");
var wave=document.getElementById("wave");

var greets=["Heyo!", "Howdy!", "Hello!", "Welcome!"];

function unfade(element) {
    var op = 0;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += 0.02;
    }, 10);
}

if(!touch){
    body.onmousemove = function(e) { 
            // var mx = e.pageX - e.currentTarget.offsetLeft; 
            // var my = e.pageY - e.currentTarget.offsetTop; 

            var mx = e.clientX ; 
            var my = e.clientY; 
            mx*=0.4;
            
        
            my*=0.4;
            my-=66;
            
            if(mx>333) mx=333;
            if(my>100) my=100;
            document.getElementById("c").style.translate = mx.toString()+"px "+my.toString() + "px"; 
    }
}

dark.addEventListener("click", function(){
    if(html.getAttribute("data-theme") == "light"){
        html.setAttribute("data-theme", "dark");
        circl.style.translate = "30px 0px";
    } 
    else{
        html.setAttribute("data-theme", "light");
        circl.style.translate = "0px 0px"; 
    } 
    fun= !fun;
})

window.onscroll = function(){
    
    if (window.pageYOffset > lastScrollY && window.pageYOffset > 64) {
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
    lastScrollY = window.pageYOffset;
    
}