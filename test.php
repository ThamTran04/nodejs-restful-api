<?php
header('Access-Control-Allow-Origin: *');
// paramètres de connexion au SGBD
$server     = 'localhost';
$user       = 'root';
$password   = '';
$base       = 'biblio';

$tableau = [];

if ($bdd = mysqli_connect($server, $user, $password,  $base)) {
    // connexion ok on demande au serveur de se mettre en utf8
    mysqli_set_charset($bdd, "utf8");
    // on initialise la requete 
    $requete = " SELECT * FROM livre";

    if ($resultat = mysqli_query($bdd, $requete)) {
        // requete ok on extrait les données puis on affiche
        while ($ligne = mysqli_fetch_assoc($resultat)) {
            $tableau[] = $ligne;
        }
        mysqli_free_result($resultat);
    } else {
        // problême avec la requête
        die("problême avec la requête SQL");
    }
}

echo json_encode($tableau);
