import sushi from "./images/sushi.jpg";

export default function createHome() {
  const content = document.querySelector("#content");

  const mainHeader = document.createElement("h1");
  mainHeader.classList.add("main-header");
  mainHeader.textContent = "The Sushi Paradise 🍣";
  content.appendChild(mainHeader);

  const sushiHero = new Image();
  sushiHero.src = sushi;
  sushiHero.classList.add("sushi-hero");
  content.appendChild(sushiHero);

  const cards = document.createElement("div");
  cards.classList.add("cards");
  content.appendChild(cards);

  const bookCardHeader = "Booking 📚";
  const bookCardDescription =
    "Call us to reserve your table, with the best Sushi you have ever tasted!";
  const bookCardphoneNumber = "Cel: 0681234567";

  const ayceCardHeader = "All You Can Eat 🥢";
  const ayceCardDescription =
    "Pay a fixed fee and order to your heart's content from a variety of choices. As many times as you want... no limits!";

  const workingHoursCardHeader = "Working Hours 🕛";
  const workingHoursCardDescription = "From Monday to Sunday";
  const workingHoursCardHours = "11:30 - 23:00";

  cards.appendChild(
    generateCard(bookCardHeader, bookCardDescription, bookCardphoneNumber)
  );
  cards.appendChild(generateCard(ayceCardHeader, ayceCardDescription));
  cards.appendChild(
    generateCard(
      workingHoursCardHeader,
      workingHoursCardDescription,
      workingHoursCardHours
    )
  );
}

function generateCard(header, text, extra) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardHeader = document.createElement("h3");
  cardHeader.textContent = header;
  card.appendChild(cardHeader);

  const cardText = document.createElement("p");
  cardText.textContent = text;
  card.appendChild(cardText);

  if (extra) {
    const extraContent = document.createElement("h4");
    extraContent.textContent = extra;
    card.appendChild(extraContent);
  }

  return card;
}
