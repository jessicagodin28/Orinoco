fetch("http://localhost:3000/api/teddies")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
  });
