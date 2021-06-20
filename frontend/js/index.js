fetch("http://localhost:3000/api/teddies")
  .then(function (res) {
    const resapi = res.json();
    console.log(res);
    return resapi;
  })
  .then(function () {});
//   .then(function (res) {
//     if (res.ok) {
//       return res.json();
//     }
//   })
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     // Une erreur est survenue
//   });
