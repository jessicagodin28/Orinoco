const makeElement = (tagName, className) => {
  const divCard = document.createElement(tagName);
  if (className) divCard.classList.add(className);
  return divCard;
};

// Element parent

const container_product = document.querySelector(".container_product");

container_product.appendChild(divCard);
