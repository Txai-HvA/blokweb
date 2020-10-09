// JavaScript Document

var body = document.querySelector("html");
var hamburger = document.querySelector("main > div:nth-of-type(1) button:nth-of-type(1)");
var chatMenu = document.querySelector("main div:nth-of-type(2)");

function toggleMenu() {
    if (body.classList.contains("scrollLeft")) {
        console.log("Close chat");
        chatMenu.classList.toggle("hideChatMenu");
        body.classList.toggle("scrollRight");
    } else {
        console.log("Open chat");
        chatMenu.classList.toggle("showChatMenu");
        body.classList.toggle("scrollLeft");
    }
}

hamburger.addEventListener("click", toggleMenu);