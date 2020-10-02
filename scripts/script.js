// JavaScript Document

var body = document.querySelector("html");
var hamburger = document.querySelector("main > div:nth-of-type(1) button:nth-of-type(1)");

var bottomMenu = document.querySelector("nav div:nth-of-type(3)");
var chatMenu = document.querySelector("main > div:nth-of-type(2)");

var count;

function isOdd(num) { return num % 2; }

function toggleMenu() {

    bottomMenu.classList.toggle("hideBottomMenu");
    chatMenu.classList.toggle("showChatMenu");

    // count = count + 1;
    // if (isOdd(count)) {
    //     body.scroll({ left: 321, behavior: "smooth" });
    // }


}

hamburger.addEventListener("click", toggleMenu);