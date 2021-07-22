const makeElement = (tagName, className) => {
  const divCard = document.createElement(tagName);
  if (className) divCard.classList.add(className);
  return divCard;
};

// Récupération du produit avec l'id associé

// Element parent

const container_product = document.querySelector(".container_product");
