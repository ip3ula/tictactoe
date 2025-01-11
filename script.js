//html code 
const htmlCode = new Map();
htmlCode.set("home", `        <section id="home">
       <h1>Tic-Tac-Toe Online – Play for Free!</h1>
       <h2>The Classic Game of Strategy and Fun</h2>
       <p>Welcome to Tic-Tac-Toe Online, the best place to enjoy the timeless game of Tic-Tac-Toe right in your browser. Whether you want to challenge a friend, test your skills against an AI opponent, or simply have fun, this is the perfect place for you!
</p>
      </section>
      <section id="what-is-tic-tac-toe">
        <h2>What Is Tic-Tac-Toe?</h2>
        <p>Tic-Tac-Toe is a simple yet engaging two-player game played on a 3x3 grid. The goal is to get three of your marks (X or O) in a row before your opponent does. It’s easy to learn, but mastering it requires strategy and foresight!</p>
      </section>
      <section id="how-to-play">
       <h2>Basic Rules:</h2>
<ol>
  <li>The game is played between two players—Player 1 (X) and Player 2 (O).</li>
  <li>Players take turns placing their mark (X or O) in an empty square on the 3x3 grid.</li>
  <li>The first player to align three of their marks in a row (horizontally, vertically, or diagonally) wins the game.</li>
  <li>If all 9 squares are filled and no one wins, the game ends in a draw.</li>
</ol>
      </section>
      <section id="game-modes-available">
        <h2>Game Modes Available</h2>
        <ul>
          <li><strong>player vs. Player: </strong>Challenge a friend and play on the same device.</li>
          <li><strong>Player vs. AI: </strong>Test your skills against a smart computer opponent with different difficulty levels.</li>
        </ul>
      </section>
      <section id="why-play-tic-tac-toe-online">
        <h2>Why Play Tic-Tac-Toe-online?</h2>
        <ul>
          <li><strong>Simple &amp Fun:</strong> Easy to learn but requires strategic thinking.</li>
          <li><strong>Fast Gameplay: </strong>Each game takes just a few minutes.</li>
          <li><strong>No Downloads: </strong>Play directly in your web browser.</li>
          <li><strong>Multiple Game Modes:</strong> Play solo or with friends.</li>
          <li><strong>Works on Any Device: </strong>Enjoy on your computer, tablet, or mobile phone.</li>
        </ul>
       </section>
      <section id="get-started-now">
       <h2>get-started-now</h2>
        <p>Are you ready to put your Tic-Tac-Toe skills to the test? Click below to start playing!</p>
<button class="btn-pn">play now</button>
      </section>`);
// Global variables
//select html element
const navIcon = document.querySelector("#nav-icon");
const playButton = document.querySelectorAll(".btn-spn");
const menu = document.querySelector("#menu-container");
const menuItems = menu.querySelectorAll("a, button");
const main = document.querySelector("main");
const home = document.querySelector(".menu-btn-Home");
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
const scrollUp = () => {
  window.scrollTo({top:0});
};
const changeHTML = (HTML, key) => {
  main.innerHTML = HTML.get(key);
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
  changeHTML(htmlCode, "home");
  scrollUp();
});
home.click();
moon.addEventListener("click", darkMode);