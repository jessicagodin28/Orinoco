// promise pour la requete API avec méthode Fetch

fetch("http://localhost:3000/api/teddies")
  .then((res) => {
    return res.json();
  })
  .then((teddies) => {
    console.log(teddies);

    const container_card = document.querySelector(".container_card");

    for (let teddy of teddies) {
      console.log(teddy.name);

      const aElement = makeElement("a", "");
      aElement.href = `./product.html?id=${teddy._id}`;

      const divCard = makeElement("div", "card");

      aElement.appendChild(divCard);

      const divCardBody = document.createElement("div");
      divCardBody.classList.add("card_body");

      divCard.appenChild(divCardBody);

      const divImg = document.createElement("img");
      divImg.classList.add("card_img_top");
      divImg.src = teddy.imageUrl;
      divImg.alt = teddy.name;

      divCardBody.appenChild(divImg);
      const h3 = document.createElement("h3");
      h3.innerText = teddy.name;

      divCardBody.appenChild(h3);
      console.log(divCard);
    }
  });
