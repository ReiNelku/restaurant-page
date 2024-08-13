import sakeNigiriImg from "./images/sake-nigiri.jpg";
import maguroNigiriImg from "./images/maguro-nigiri.jpg";
import ebiNigiriImg from "./images/ebi-nigiri.jpg";
import unagiNigiriImg from "./images/unagi-nigiri.jpg";
import sakeMakiImg from "./images/sake-maki.jpg";
import avocadoMakiImg from "./images/avocado-maki.jpg";
import philadelphiaMakiImg from "./images/philadelphia-maki.jpg";
import springrollMakiImg from "./images/springroll-maki.jpg";
import californiaRollImg from "./images/california-roll.jpg";
import uraMiuraImg from "./images/ura-miura.jpg";
import tigerRollImg from "./images/tiger-roll.jpg";
import rainbowRollImg from "./images/rainbow-roll.jpg";

export default function createMenu() {
  const nigiriMenuCards = generateMenuCategory("Nigiri");

  const sakeNigiri = new Sushi(
    "Sake Nigiri",
    sakeNigiriImg,
    ["Rice", "Raw Salmon"],
    "4.5$ per piece"
  );
  nigiriMenuCards.appendChild(generateMenuItemCard(sakeNigiri));

  const maguroNigiri = new Sushi(
    "Maguro Nigiri",
    maguroNigiriImg,
    ["Rice", "Raw Tuna"],
    "4.5$ per piece"
  );
  nigiriMenuCards.appendChild(generateMenuItemCard(maguroNigiri));

  const ebiNigiri = new Sushi(
    "Ebi Nigiri",
    ebiNigiriImg,
    ["Rice", "Cooked Shrimp"],
    "4.5$ per piece"
  );
  nigiriMenuCards.appendChild(generateMenuItemCard(ebiNigiri));

  const unagiNigiri = new Sushi(
    "Unagi Nigiri",
    unagiNigiriImg,
    ["Rice", "Cooked Eel", "Nori Seaweed", "Sesame Seeds"],
    "5$ per piece"
  );
  nigiriMenuCards.appendChild(generateMenuItemCard(unagiNigiri));

  const makiMenuCards = generateMenuCategory("Maki");

  const sakeMaki = new Sushi(
    "Sake Maki",
    sakeMakiImg,
    ["Nori Seaweed", "Rice", "Raw Salmon"],
    "4.5$ per 8 piece"
  );
  makiMenuCards.appendChild(generateMenuItemCard(sakeMaki));

  const avocadoMaki = new Sushi(
    "Avocado Maki",
    avocadoMakiImg,
    ["Nori Seaweed", "Rice", "Avocado"],
    "4.5$ per 8 piece"
  );
  makiMenuCards.appendChild(generateMenuItemCard(avocadoMaki));

  const philadelphiaMaki = new Sushi(
    "Philadelphia Maki",
    philadelphiaMakiImg,
    [
      "Nori Seaweed",
      "Rice",
      "Raw Salmon",
      "Philadelphia Cheese",
      "Cucumber",
      "Avocado",
      "Lettuce",
    ],
    "12$ per 8 piece"
  );
  makiMenuCards.appendChild(generateMenuItemCard(philadelphiaMaki));

  const springrollMaki = new Sushi(
    "Springroll Maki",
    springrollMakiImg,
    [
      "Nori Seaweed",
      "Rice",
      "Salmon",
      "Avocado",
      "Jarlsberg Cheese",
      "Teriyaki Sauce",
    ],
    "11$ per 8 piece"
  );
  makiMenuCards.appendChild(generateMenuItemCard(springrollMaki));

  const uramakiMenuCards = generateMenuCategory("Uramaki");

  const californiaRoll = new Sushi(
    "California Roll",
    californiaRollImg,
    ["Rice", "Nori Seaweed", "Crabmeat", "Avocado", "Cucumber"],
    "10$ per 8 piece"
  );
  uramakiMenuCards.appendChild(generateMenuItemCard(californiaRoll));

  const uraMiura = new Sushi(
    "Ura Miura",
    uraMiuraImg,
    ["Rice", "Nori Seaweed", "Cooked Salmon", "Philadelphia Cheese"],
    "10$ per 8 piece"
  );
  uramakiMenuCards.appendChild(generateMenuItemCard(uraMiura));

  const tigerRoll = new Sushi(
    "Tiger Roll",
    tigerRollImg,
    [
      "Raw Salmon",
      "Rice",
      "Nori Seaweed",
      "Cooked Shrimp",
      "Crabmeat",
      "Avocado",
      "Philadelphia Cheese",
    ],
    "11.5$ per 8 piece"
  );
  uramakiMenuCards.appendChild(generateMenuItemCard(tigerRoll));

  const rainbowRoll = new Sushi(
    "Rainbow Roll",
    rainbowRollImg,
    [
      "Raw Salmon",
      "Raw Tuna",
      "Rice",
      "Nori Seaweed",
      "Crabmeat",
      "Avocado",
      "Cucumber",
    ],
    "13$ per 8 piece"
  );
  uramakiMenuCards.appendChild(generateMenuItemCard(rainbowRoll));
}

class Sushi {
  constructor(header, image, ingredients, price) {
    this.header = header;
    this.image = image;
    this.ingredients = ingredients;
    this.price = price;
  }
}

function generateMenuCategory(categoryName) {
  const content = document.querySelector("#content");

  const sushiCategory = document.createElement("div");
  sushiCategory.classList.add("menu-category");
  content.appendChild(sushiCategory);

  const sushiCategoryHeader = document.createElement("h2");
  sushiCategoryHeader.textContent = categoryName;
  sushiCategory.appendChild(sushiCategoryHeader);

  const sushiCategoryMenuCards = document.createElement("div");
  sushiCategoryMenuCards.classList.add("menu-cards");
  sushiCategory.appendChild(sushiCategoryMenuCards);

  return sushiCategoryMenuCards;
}

function generateMenuItemCard(sushi) {
  const card = document.createElement("div");
  card.classList.add("menu-card");

  const cardHeader = document.createElement("h3");
  cardHeader.textContent = sushi.header;
  card.appendChild(cardHeader);

  const cardImg = new Image();
  cardImg.src = sushi.image;
  card.appendChild(cardImg);

  const cardIngredientsHeader = document.createElement("h4");
  cardIngredientsHeader.textContent = "Ingredients";
  card.appendChild(cardIngredientsHeader);

  const cardIngredients = document.createElement("ul");
  sushi.ingredients.forEach((ingredient) => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    cardIngredients.appendChild(item);
  });
  card.appendChild(cardIngredients);

  const priceHeader = document.createElement("h4");
  priceHeader.textContent = "Price";
  card.appendChild(priceHeader);

  const priceDescription = document.createElement("p");
  priceDescription.textContent = sushi.price;
  card.appendChild(priceDescription);

  return card;
}
