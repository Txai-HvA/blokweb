// JavaScript Document

var body = document.querySelector("html");
var hamburger = document.querySelector("main > div:nth-of-type(1) button:nth-of-type(1)");

var bottomMenu = document.querySelector("aside");
var chatMenu = document.querySelector("main > div:nth-of-type(2)");

function toggleMenu() {

    bottomMenu.classList.toggle("hideBottomMenu");
    chatMenu.classList.toggle("showChatMenu");
}

hamburger.addEventListener("click", toggleMenu);