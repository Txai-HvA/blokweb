// JavaScript Document

var body = document.querySelector("html");
var hamburger = document.querySelector("main > div:nth-of-type(1) button:nth-of-type(1)");
var bottomMenu = document.querySelector("nav div:nth-of-type(3)");

function toggleMenu() {
    if (body.classList.contains("scrollLeft")) {
        console.log("Close chat");
        bottomMenu.classList.toggle("showBottomMenu");
        body.classList.toggle("scrollRight");
    } else {
        console.log("Open chat");
        bottomMenu.classList.toggle("hideBottomMenu");
        body.classList.toggle("scrollLeft");
    }
}

hamburger.addEventListener("click", toggleMenu);