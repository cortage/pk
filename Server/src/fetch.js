fetch("http://localhost:5000/", {
  mode: 'cors',
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  });
