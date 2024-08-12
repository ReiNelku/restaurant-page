import displayHome from "./home.js";
import displayMenu from "./menu.js";
import "./style.css";

(function () {
  const content = document.querySelector("#content");

  const homeTab = document.querySelector("#home");
  homeTab.classList.add("active");
  displayHome();
  homeTab.addEventListener("click", createNavTabEventListeners);

  const menuTab = document.querySelector("#menu");
  menuTab.addEventListener("click", createNavTabEventListeners);
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
  }
}

function removeActiveClasses() {
  document
    .querySelectorAll("nav button")
    .forEach((btn) => btn.classList.remove("active"));
}
