import sushiRowImg from "./images/sushi-row.jpg";

export default function createAboutUs() {
  const content = document.querySelector("#content");

  const mainHeader = document.createElement("h1");
  mainHeader.classList.add("main-header");
  mainHeader.textContent = "About Us";
  content.appendChild(mainHeader);

  const sushi = new Image();
  sushi.src = sushiRowImg;
  sushi.classList.add("sushi-hero");
  content.appendChild(sushi);

  const aboutUsText =
    "Welcome to Sushi Paradise, where tradition meets innovation in every bite. At Sushi Paradise, we believe that sushi is not just a meal—it’s an experience. Nestled in the heart of Morioh, our restaurant is dedicated to bringing you the freshest, most exquisite sushi and Japanese cuisine in a warm, inviting atmosphere.";
  content.appendChild(generateText(aboutUsText));

  const aboutUsDiv = document.createElement("div");
  aboutUsDiv.classList.add("about-us");
  content.appendChild(aboutUsDiv);

  const ourStory = document.createElement("div");
  aboutUsDiv.appendChild(ourStory);
  ourStory.appendChild(generateHeader("Our Story"));
  const ourStoryText =
    "Founded in 1999, Sushi Paradise was born out of a passion for authentic Japanese cuisine and a desire to share it with our community. Our founder, Elvis, traveled extensively through Japan, immersing themselves in the rich culinary traditions and learning from some of the most revered sushi masters. Inspired by this journey, they envisioned a place where quality, freshness, and artistry come together.";
  ourStory.appendChild(generateText(ourStoryText));

  const ourPhilosophy = document.createElement("div");
  aboutUsDiv.appendChild(ourPhilosophy);
  ourPhilosophy.appendChild(generateHeader("Our Philosophy"));
  const ourPhilosophyText =
    "At Sushi Paradise, we pride ourselves on using only the finest ingredients. We source our seafood from trusted suppliers who meet the highest standards of quality and sustainability. Each piece of sushi is crafted with care, using traditional techniques combined with innovative touches to create flavors that are both classic and contemporary.";
  ourPhilosophy.appendChild(generateText(ourPhilosophyText));

  const ourCommitment = document.createElement("div");
  aboutUsDiv.appendChild(ourCommitment);
  ourCommitment.appendChild(generateHeader("Our Commitment"));
  const ourCommitmentText =
    "We’re more than just a restaurant; we’re a community hub where people come together to enjoy great food and each other’s company. Our friendly and knowledgeable staff are here to ensure you have a memorable dining experience, whether you're celebrating a special occasion or simply enjoying a casual meal.";
  ourCommitment.appendChild(generateText(ourCommitmentText));

  const joinUs = document.createElement("div");
  aboutUsDiv.appendChild(joinUs);
  joinUs.appendChild(generateHeader("Join Us"));
  const joinUsText =
    "We invite you to visit Sushi Paradise and discover why we’re more than just a place to eat—we’re a destination for exceptional sushi and a great time. From our family to yours, thank you for choosing Sushi Paradise. We look forward to serving you and making your dining experience unforgettable.";
  joinUs.appendChild(generateText(joinUsText));
}

function generateHeader(text) {
  const header = document.createElement("h2");
  header.classList.add("about-us-header");
  header.textContent = text;

  return header;
}

function generateText(text) {
  const para = document.createElement("p");
  para.classList.add("about-us-text");
  para.textContent = text;

  return para;
}
