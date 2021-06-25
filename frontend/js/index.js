const makeElement = (tagName, className) => {
  const divCard = document.createElement(tagName);
  if (className) divCard.classList.add(className);
  return divCard;
};

// promise pour la requete API avec méthode Fetch

fetch("http://localhost:3000/api/teddies")
  .then((res) => {
    return res.json();
  })
  .then((teddies) => {
    console.log(teddies);

    // Element parent

    const container_card = document.querySelector(".container_card");

    // Iteration sur le tableau pour atteindre chaque élément
    for (let teddy of teddies) {
      console.log(teddy.name);

      const aElement = makeElement("a", "");
      aElement.href = `./product.html?id=${teddy._id}`;

      const divCard = makeElement("div", "card");

      aElement.appendChild(divCard);

      container_card.appendChild(aElement);

      const divCardBody = makeElement("div");
      divCardBody.classList.add("card_body");

      divCard.appendChild(divCardBody);

      const divImg = makeElement("img");
      divImg.classList.add("card_img_top");
      divImg.src = teddy.imageUrl;
      divImg.alt = teddy.name;

      divCardBody.appendChild(divImg);

      const divCardBlocText = makeElement("div");
      divCardBlocText.classList.add("card_bloc_text");

      divCardBody.appendChild(divCardBlocText);

      const divCardTitle = makeElement("div");
      divCardTitle.classList.add("card_title");

      divCardBlocText.appendChild(divCardTitle);

      const h3 = makeElement("h3");
      h3.innerText = teddy.name;

      divCardTitle.appendChild(h3);

      const divCardText = makeElement("div");
      divCardText.classList.add("card_text");

      divCardTitle.appendChild(divCardText);

      const p = makeElement("p");
      p.innerText = teddy.description;

      divCardText.appendChild(p);

      const divCardPrice = makeElement("div");
      divCardPrice.classList.add("card_price");

      divCardText.appendChild(divCardPrice);

      // divCardPrice.appendChild(p);
      // p.innerText = teddy.price;

      console.log(divCard);
    }
  });
