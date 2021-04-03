async function getJson1() {
  const response = await fetch("http://localhost/nodejs-restful-api/test.php");
  return await response.json();
}

//promise: https://openplanning.net/12395/javascript-fetch-api
function getJson2() {
  return fetch("http://localhost/nodejs-restful-api/test.php")
    .then((r) => r.json());
}

document.querySelector("#book").addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();
  const resultat = [];
  getJson1().then((books) => {
    if (search !== "") {
      books.forEach((book) => {
        let titre = book.titre.toLowerCase();
        if (titre.includes(search)) resultat.push(book);
      });
    }
    showBooks(resultat);
  });
});

function showBooks(listBooks) {
  const liste = document.querySelector("#listBooks");
  liste.innerHTML = "";

  listBooks.forEach((book) => {
    const div = document.createElement("div");
    div.innerHTML = book.titre;
    liste.appendChild(div);
  });
}