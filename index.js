//Livre = Objet Livre
const ligneLivre = livre => `
	<tr>
		<td>${livre.titre}</td>
		<td>${livre.auteur}</td>
		<td>${livre.genre}</td>
		<td>${livre.prix}</td>
        <td>${livre.prix}</td>
        <td><button data-type="delete" data-id="${livre.id}">Supprimer</button></td>
	</tr>`

// const getAll = async () => {
//     const reponse = await fetch('http://localhost:8000/api/v1/livres')
//         .then(result => result.json());
//     return reponse.resultat;
// }

async function getAll() {
    const response = await fetch('http://localhost:8000/api/v1/livres?max=5');
    const res = await response.json();
    return res.resultat; // le mot 'resultat' venant du fichier ../assets/functions
}

async function afficheLivres() {
    const el = document.getElementById('listLivres');
    const livres = await getAll();
    livres.forEach(livre => el.innerHTML += ligneLivre(livre));
}

afficheLivres()