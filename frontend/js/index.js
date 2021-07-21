const makeElement = (tagName, className) => {
  const divCard = document.createElement(tagName);
  if (className) divCard.classList.add(className);
  return divCard;
};

const storeLocalStorage = window.localStorage.getItem("test");

const store = JSON.parse(storeLocalStorage) ?? [];

console.log(store);

const storeElement = (teddy) => {
  store.push(teddy);

  window.localStorage.setItem("test", JSON.stringify(store));
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

      const divCard = makeElement("div", "card");

      container_card.appendChild(divCard);

      const divCardBody = makeElement("div");
      divCardBody.classList.add("card_body");

      divCard.appendChild(divCardBody);

      const divImg = makeElement("img");
      divImg.classList.add("card_img_top");
      divImg.src = teddy.imageUrl;
      divImg.alt = teddy.name;

      const aElementImg = makeElement("a", "");
      aElementImg.href = `./product.html?id=${teddy._id}`;

      aElementImg.appendChild(divImg);

      divCardBody.appendChild(aElementImg);

      const divCardBlocText = makeElement("div");
      divCardBlocText.classList.add("card_bloc_text");

      divCardBody.appendChild(divCardBlocText);

      const divCardTitle = makeElement("div");
      divCardTitle.classList.add("card_title");

      const aElementImgTitle = makeElement("a", "");
      aElementImgTitle.href = `./product.html?id=${teddy._id}`;

      aElementImgTitle.appendChild(divCardTitle);

      divCardBlocText.appendChild(aElementImgTitle);

      const h3 = makeElement("h3");
      h3.innerText = teddy.name;

      divCardTitle.appendChild(h3);

      const divCardText = makeElement("div");
      divCardText.classList.add("card_text");

      divCardBlocText.appendChild(divCardText);

      const p = makeElement("p");
      p.innerText = teddy.description;

      divCardText.appendChild(p);

      const divCardPrice = makeElement("div");
      divCardPrice.classList.add("card_price");

      divCardPrice.innerText = `${(teddy.price / 100).toFixed(2)}€`;
      divCardText.appendChild(divCardPrice);

      const divCardBtn = makeElement("div");
      divCardBtn.classList.add("card_btn");

      divCardPrice.appendChild(divCardBtn);

      const divTextCenter = makeElement("div");
      divTextCenter.classList.add("text_center");

      divCardBtn.appendChild(divTextCenter);

      const linkAddLink = makeElement("span");
      linkAddLink.classList.add("add_link");
      linkAddLink.innerText = "Ajouter au panier";
      linkAddLink.addEventListener("click", () => {
        storeElement(teddy);
      });

      divTextCenter.appendChild(linkAddLink);

      console.log(divCard);
    }
  });
