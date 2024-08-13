import displayHome from "./home.js";
import displayMenu from "./menu.js";
import displayAboutUsMenu from "./about-us.js";
import "./style.css";

(function () {
  const content = document.querySelector("#content");

  const homeTab = document.querySelector("#home");
  homeTab.classList.add("active");
  displayHome();
  homeTab.addEventListener("click", createNavTabEventListeners);

  const menuTab = document.querySelector("#menu");
  menuTab.addEventListener("click", createNavTabEventListeners);

  const aboutUsTab = document.querySelector("#about");
  aboutUsTab.addEventListener("click", createNavTabEventListeners);
})();

function createNavTabEventListeners() {
  content.textContent = "";
  removeActiveClasses();

  switch (this.textContent) {
    case "Home":
      this.classList.add("active");
      displayHome();
      break;

    case "Menu":
      this.classList.add("active");
      displayMenu();
      break;

    case "About Us":
      this.classList.add("active");
      displayAboutUsMenu();
      break;
  }
}

function removeActiveClasses() {
  document
    .querySelectorAll("nav button")
    .forEach((btn) => btn.classList.remove("active"));
}
