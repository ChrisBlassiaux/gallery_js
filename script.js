
// -----------------
// PSEUDO-CODE
// -----------------

// Les actions de l'utilisateur : 
// L'utilisateur clique sur une petite image à droite


// Les différentes étapes :
// Récupérer 10 images sur internet
// Réaliser l'affichage des différentes images en HTML/CSS
    // Utiliser la propriété "background" en CSS sur des <div> pour afficher les images
    // Les emplacements pour les images doivent-être prévus en CSS (les évènements ne doivent rien changer)
    // Préparer plusieurs ID/Class utiles pour le Javascript dans notre HTML (big, small)
// Ajouter un écouteur d'évènement au clique sur toutes les images (Lorsque l'utilisateur clique sur une image à droite)
    // Aller rechercher tous les noeuds <div> qui ont la class 'small', et boucler sur le tableau reçu pour ajouter un évènement
// L'évènement (dès que l'utilisateur clique) : 
    // On va récupérer le background de l'image qui vient d'être cliquée, et on la stock
    // On donne le background de la petite image à la grande <div>
    // On peut réaliser la même chose avec l'attribut "alt"
// Ça fonctionne ! Enfin, j'espère :D 

// -----------------
// CODE JS 
// -----------------

// Récuperer les petites images (sous forme de liste)
let smallImages = document.querySelectorAll('.small');

// Récuperer la big image
let bigImage = document.querySelector('.big');

// Boucler dans la liste
for (let i = 0; i < smallImages.length; i++) {
    // Ajout de l'écouteur d'évènement sur chaque noeud (petite image)
    smallImages[i].addEventListener('click', function() {
        // Récupérer l'url de la petite image qui a été cliqué
        urlSmallImage = window.getComputedStyle(smallImages[i], false).backgroundImage;
        // Modifier l'url de la grande image en y ajoutant l'url de la petite à la place
        bigImage.style.backgroundImage = urlSmallImage;
        // Boucler toutes les petites images pour ajouter la bordure grise à la place de la rouge
        for (let i = 0; i < smallImages.length; i++) {
            smallImages[i].style.borderColor = 'rgb(142, 142, 142)';
        }
        // Ajouter la bordure rouge sur l'image cliquée
        smallImages[i].style.borderColor = 'red';
    });
}
