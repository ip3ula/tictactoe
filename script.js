// Global variables
//select html element
const navIcon = document.querySelector("#nav-icon");
const playButton = document.querySelectorAll(".btn-spn");
const menu = document.querySelector("#menu-container");
const menuItems = menu.querySelectorAll("a, button");
const main = document.querySelector("main");
const mainDiv = document.querySelectorAll("main > div");
const home = document.querySelector(".menu-btn-Home");
const homeContainer = document.querySelector(".home-container");
const play = document.querySelector(".play-button");
const playContainer = document.querySelector(".play-container");
const github = document.querySelector(".menu-btn-github");
const moon = document.querySelector(".menu-btn-moon");
const sunIcon = document.querySelector(".menu-btn-moon > i");
// Functions
const toggleMenu = () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    navIcon.classList.replace("fa-bars", "fa-times");
  } else {
    menu.classList.add("hidden");
    navIcon.classList.replace("fa-times", "fa-bars");
  }
};
const hideMenu = () => {
  menu.classList.add("hidden");
  navIcon.classList.replace("fa-times", "fa-bars");
};
const changeHTML = (element) => {
  mainDiv.forEach((div) => div.classList.add("hidden"))
  element.classList.remove("hidden");
  window.scrollTo({top:0});
};

const darkMode = () => {
 document.documentElement.classList.toggle("darkmode");
if(moon.innerText.includes("Dark")){
  moon.innerHTML =`
 <i class="fas fa-sun"></i>white mode`; 
 localStorage.setItem("darkMode", "true");
} else {
  moon.innerHTML = `<i class="fas fa-moon"></i>Dark mode`;
  localStorage.setItem("darkMode", "false");
}

};
window.onload = () => {
  if(localStorage.getItem("darkMode") === "true"){
  darkMode();
   }
};

// Event listeners
navIcon.addEventListener("click", toggleMenu);
menuItems.forEach(menuItem => {
  menuItem.addEventListener("click", hideMenu);
});
home.addEventListener("click", () => {
  changeHTML(homeContainer);
});
home.click();
moon.addEventListener("click", darkMode);
github.addEventListener("click", () => {
  window.location.href = "https://github.com/ip3ula/tictactoe";
})
play.addEventListener("click", () => {
  changeHTML(playContainer)
  hideMenu()
  play.innerText= "cancel";
  play.style.backgroundColor = "#404040";
  // play.style.fontSize = "20px";
})