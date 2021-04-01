//Livre = Objet Livre
const ligneLivre = livre => `
	<tr>
		<td>${livre.titre}</td>
		<td>${livre.auteur}</td>
		<td>${livre.genre}</td>
		<td>${livre.prix}</td>
        <td>${livre.prix}</td>
        <td><button data-type="delete" data-id="${livre.numlivre}">Supprimer</button></td>
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

async function delLivre(id) {
    const response = await fetch('http://localhost:8000/api/v1/livres/${id}', {
        method: 'DELETE'
    });
    return response.resultat;
}

async function deleteLivre(id) {
    delLivre(id).then(() => afficheLivres());
}

async function afficheLivres() {
    const el = document.getElementById('listLivres');
    const livres = await getAll();
    livres.forEach(livre => el.innerHTML += ligneLivre(livre));
    document.querySelectorAll('[data-type="delete"]').forEach(element => {
        element.addEventListener('click', e => {
            e.preventDefault();
            deleteLivre(parseInt(e.target.dataset.id));
            console.log(e.target.dataset.id);
        })
    })
}

afficheLivres()