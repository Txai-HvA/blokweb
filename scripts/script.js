// JavaScript Document

// Elementen
var body = document.querySelector("html");
var main = document.querySelector("main");
var nav = document.querySelector("nav");
var bottomMenu = document.querySelector("nav div:nth-of-type(3)");
var channelList = document.querySelector("nav > div:nth-of-type(2) > ul:nth-of-type(1)");
var folderServers = document.querySelector("nav div:nth-of-type(1) > ul");
var folderContainer = document.querySelector("nav div:nth-of-type(1) > div:nth-of-type(1)");
var chatMessages = document.querySelector("main ul");

// Buttons / Links
var hamburger = document.querySelector("main > div:nth-of-type(1) button:nth-of-type(1)");
var generalLink = document.querySelector("nav > div:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(1) > a");
var textChannelsButton = document.querySelector("nav div:nth-of-type(2) div:nth-of-type(2) button:nth-of-type(1)");
var folderButton = document.querySelector("nav div:nth-of-type(1) > div:nth-of-type(1) > button");
var discordButton = document.querySelector("nav div:nth-of-type(3) > ul > li:nth-of-type(1) > button");


window.onload = function() {
    // Zodra de pagina laad, start de chat vanaf het eerste bericht onderaan 
    // xpos, ypos
    chatMessages.scrollTo(0, 2000);
}

function toggleMenu() {

    if (bottomMenu.classList.contains("hideBottomMenu")) {
        // Toont Settings menu en schuift naar de nav
        console.log("Close chat");
        bottomMenu.classList.add("showBottomMenu");
        bottomMenu.classList.remove("hideBottomMenu");

        nav.scrollIntoView({ behavior: 'smooth' }); //
    } else {
        // Verbergt Settings menu en schuift naar de chat
        console.log("Open chat");
        bottomMenu.classList.add("hideBottomMenu");
        bottomMenu.classList.remove("showBottomMenu");

        main.scrollIntoView({ behavior: 'smooth' }); //
    }
}

function toggleTextChannels(event) {
    event.preventDefault();
    // Als channels verborgen zijn, verander tekst van textChannelButton
    if (channelList.classList.contains("hide")) {
        textChannelsButton.textContent = "v Text channels";
    } else {
        textChannelsButton.textContent = "> Text channels";
    }
    // Verbergt/Toont channelList
    channelList.classList.toggle("hide");
}

function toggleServerFolder(event) {
    // Open/sluit server folder
    event.preventDefault();
    folderServers.classList.toggle("hide");
    folderContainer.classList.toggle("closedFolder");
}

// EventListeners
hamburger.addEventListener("click", toggleMenu);
generalLink.addEventListener("click", toggleMenu);
discordButton.addEventListener("click", toggleMenu);
textChannelsButton.addEventListener("click", toggleTextChannels);
folderButton.addEventListener("click", toggleServerFolder);