//variables
const playerScore = 0
const computerScore = 0
const gold = 0
const modeValue = "One player"
const levelValue = "easy"
let clickCount = 0
// Select HTML elements
const navIcon = document.querySelector("#nav-icon");
const menu = document.querySelector("#menu");
console.log("working");
const menuItems = menu.querySelectorAll("a, button");
const menuUl = document.querySelector("#menu-list > ul");
const github = document.querySelector(".menu-github");
const mode = document.querySelector(".menu-mode");
const homeBtn = document.querySelector(".menu-home");
const playBtn = document.querySelector(".play-btn");
const storeBtn = document.querySelector(".menu-store");
const privacyLink = document.querySelector(".privacy-link");
const termsLink = document.querySelector(".terms-link");
const contactLink = document.querySelector(".contact-link");
const home = document.querySelectorAll(".home");
const play = document.querySelectorAll(".play");
const store = document.querySelectorAll(".store");
const privacy = document.querySelectorAll(".privacy");
const terms = document.querySelectorAll(".terms");
const contactUs = document.querySelectorAll(".contact-us");
const modeBtn = document.querySelector(".mode-btn")
const modeChevron = document.querySelector(".fa.mode")
const levelBtn = document.querySelector(".level-btn")
const levelChevron = document.querySelector(".level-btn")
const chooseLevel = document.querySelector("#choose-level")
const chooseMode = document.querySelector("#choose-mode")
const faLevel = document.querySelector("#level-icon")
const faMode = document.querySelector("#mode-icon")
const tableButtons = document.querySelectorAll(".xo-button")
// Functions
const toggleMenu = () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    navIcon.classList.replace("fa-times", "fa-bars");
  } else {
    menu.classList.add("active");
    navIcon.classList.replace("fa-bars", "fa-times");
  }
};

const hideMenu = () => {
  menu.classList.remove("active");
  navIcon.classList.replace("fa-times", "fa-bars");
};

const changeHTML = (elements, sectionName) => {
  const active = document.querySelectorAll(".active");
  active.forEach((item) => item.classList.remove("active"));
  elements.forEach((element) => element.classList.add("active"));

  // Save the current section to localStorage
  localStorage.setItem("activeSection", sectionName);

  window.scrollTo({ top: 0 });
};

const darkMode = () => {
  document.documentElement.classList.toggle("darkmode");
  if (mode.innerText.includes("Dark")) {
    mode.innerHTML = `<i class="fas fa-sun"></i> White Mode`;
    localStorage.setItem("darkMode", "true");
  } else {
    mode.innerHTML = `<i class="fas fa-moon"></i> Dark Mode`;
    localStorage.setItem("darkMode", "false");
  }
};

// Restore dark mode and the last active section on page load
window.addEventListener("DOMContentLoaded", () => {
  // Restore dark mode
  if (localStorage.getItem("darkMode") === "true") {
    darkMode();
  }

  // Restore the last active section
  const activeSection = localStorage.getItem("activeSection");
  if (activeSection === "home") changeHTML(home, "home");
  else if (activeSection === "play") changeHTML(play, "play");
  else if (activeSection === "store") changeHTML(store, "store");
  else if (activeSection === "privacy") changeHTML(privacy, "privacy");
  else if (activeSection === "terms") changeHTML(terms, "terms");
  else if (activeSection === "contactUs") changeHTML(contactUs, "contactUs");
  else changeHTML(home, "home"); // Default to home if no section is saved
});

// Event listeners
navIcon.addEventListener("click", toggleMenu);
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", hideMenu);
});
mode.addEventListener("click", darkMode);
github.addEventListener("click", () => {
  window.location.href = "https://github.com/ip3ula/tictactoe";
});
homeBtn.addEventListener("click", () => {
  changeHTML(home, "home");
});
playBtn.addEventListener("click", () => {
  changeHTML(play, "play");
  hideMenu();
});
storeBtn.addEventListener("click", () => {
  changeHTML(store, "store");
});
privacyLink.addEventListener("click", () => {
  changeHTML(privacy, "privacy");
});
termsLink.addEventListener("click", () => {
  changeHTML(terms, "terms");
});
contactLink.addEventListener("click", () => {
  changeHTML(contactUs, "contactUs");
});
modeBtn.addEventListener("click", () => { 
  
})
chooseLevel.addEventListener("click", () => {
  levelBtn.classList.toggle("active")
  faLevel.classList.toggle("rotate")
})
chooseMode.addEventListener("click", () => {
  modeBtn.classList.toggle("active")
  faMode.classList.toggle("rotate")
})
tableButtons.forEach((button) => {
  button.addEventListener("click", () => {
    clickCount++; // Increment clickCount here
    if(button.innerText != "X" && button.innerText != "O"){
    if (clickCount % 2 === 1) {
      button.innerText = "X";
    } else { 
      button.innerText = "O";
    }
  }});
});
// Prevent URL from changing during navigation
window.addEventListener("popstate", (event) => {
  history.pushState(null, "", window.location.href);
});
history.pushState(null, "", window.location.href);