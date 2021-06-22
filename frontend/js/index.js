const { response } = require("express");

fetch("http://localhost:3000/api/teddies")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
  });

let html = "";

for (let i = 0; i < response.length; i++) {
  console.log(response[i].name);
}
