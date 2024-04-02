// Définition de la classe Pays
class Pays {
    constructor(nom, drapeau, capitale, image) {
        this.nom = nom;
        this.drapeau = drapeau;
        this.capitale = capitale;
        this.image = image;
    }
}

// Création des instances de la classe Pays pour chaque pays de l'UE
let france = new Pays('France', 'Images/Drp-France.png', 'Paris', "./Images/France.png");
let allemagne = new Pays('Allemagne', 'Images/Drp-Allemagne.png', 'Berlin', 'Images/Allemagne.png');
let espagne = new Pays('Espagne', 'Images/Drp-Espagne.png', 'Madrid', 'Images/Espagne.png');
let autriche = new Pays('Autriche', 'Images/Drp-Autriche.png', 'Vienne', 'Images/Autriche.png');
let pologne = new Pays('Pologne', 'Images/Drp-Pologne.png', 'Varsovie', 'Images/Pologne.png');
let finlande = new Pays('Finlande', 'Images/Drp-Finlande.png', 'Helsinki', 'Images/Finlande.png');
let roumanie = new Pays('Roumanie', 'Images/Drp-Roumanie.png', 'Bucarest', 'Images/Roumanie.png');
let portugal = new Pays('Portugal', 'Images/Drp-Portugal.png', 'Lisbonne', 'Images/Portugal.png');
let suede = new Pays('Suède', 'Images/Drp-Suede.png', 'Stockholm', 'Images/Suède.png');
let hongrie = new Pays('Hongrie', 'Images/Drp-Hongrie.png', 'Budapest', 'Images/Hongrie.png');
let irlande = new Pays('Irlande', 'Images/Drp-Irlande.png', 'Dublin', 'Images/Irlande.png');
let italie = new Pays('Italie', 'Images/Drp-Italie.png', 'Rome', 'Images/Italie.png');
let luxembourg = new Pays('Luxembourg', 'Images/Drp-Luxembourg.png', 'Luxembourg', 'Images/Luxembourg.png');
let grece = new Pays('Grèce', 'Images/Drp-Grèce.png', 'Athènes', 'Images/Grèce.png');
let pays_bas = new Pays('Pays-Bas', 'Images/Drp-Pays-Bas.png', 'Amsterdam', 'Images/Pays-Bas.png');
let bulgarie = new Pays('Bulgarie', 'Images/Drp-Bulgarie.png', 'Sofia', 'Images/Bulgarie.png');
let republique_tcheque = new Pays('République tchèque', 'Images/Drp-Republique-tcheque.png', 'Prague', 'Images/Rep Tcheque.png');
let slovaquie = new Pays('Slovaquie', 'Images/Drp-Slovaquie.png', 'Bratislava', 'Images/Slovaquie.png');
let malte = new Pays('Malte', 'Images/Drp-Malte.png', 'La Valette', 'Images/Malte.png');
let slovenie = new Pays('Slovénie', 'Images/Drp-Slovenie.png', 'Ljubljana', 'Images/Slovenie.png');
let lettonie = new Pays('Lettonie', 'Images/Drp-Lettonie.png', 'Riga', 'Images/Lettonie.png');
let lithuanie = new Pays('Lituanie', 'Images/Drp-Lituanie.png', 'Vilnius', 'Images/Lituanie.png');
let estonie = new Pays('Estonie', 'Images/Drp-Estonie.png', 'Tallinn', 'Images/Estonie.png');
let danemark = new Pays('Danemark', 'Images/Drp-Danemark.png', 'Copenhague', 'Images/Danemark.png');
let belgique = new Pays('Belgique', 'Images/Drp-Belgique.png', 'Bruxelles', 'Images/Belgique.png');
let croatie = new Pays('Croatie', 'Images/Drp-Croatie.png', 'Zagreb', 'Images/Croatie.png');
let chypre = new Pays('Chypre', 'Images/Drp-Chypre.png', 'Nicosie', 'Images/Chypre.png');

// Liste des instances de Pays
let paysInstances = [
    france, allemagne, espagne, autriche, pologne, finlande, roumanie,
    portugal, suede, hongrie, irlande, italie, luxembourg, grece, pays_bas,
    bulgarie, republique_tcheque, slovaquie, malte, slovenie, lettonie,
    lithuanie, estonie, danemark, belgique, croatie, chypre
];

// Récupération des éléments HTML
const checkboxPays = document.getElementById('checkboxPays');
const checkboxCapitales = document.getElementById('checkboxCapitales');
const checkboxDrapeaux = document.getElementById('checkboxDrapeaux');
const checkboxCartes = document.getElementById('checkboxCartes');
const launchGameButton = document.getElementById('launchGameButton');
const gameBoard = document.getElementById('gameBoard');
const matchZone = document.getElementById('matchZone');

// Déclaration des tableaux choix1 et choix2 et patchCountries
let choix1 = [];
let choix2 = [];
let patchCountries = [];

// Fonction pour générer des IDs uniques basés sur l'index
function generateUniqueID(index) {
    return `element_${index}`;
}

// Fonction pour sélectionner 10 pays aléatoires
function selectRandomCountries(paysInstances) {
    let randomIndices = [];
    while (randomIndices.length < 10) {
        let randomIndex = Math.floor(Math.random() * paysInstances.length);
        if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
        }
    }
    let selectedCountries = [];
    randomIndices.forEach(index => {
        selectedCountries.push(paysInstances[index]);
    });
    return selectedCountries;
}

// Utilisation de la fonction pour sélectionner 10 pays aléatoires
let randomCountries = selectRandomCountries(paysInstances);

// Fonction pour créer et mélanger les cartes
function createAndShuffleCards() {
    selectedCards = [];
    choix1.forEach(choice =>
        selectedCards.push(choice));
    choix2.forEach(choice => selectedCards.push(choice));
    selectedCards.sort(() => Math.random() - 0.5);
    }
    
    // Tableau pour suivre les cartes retournées
let flippedCards = [];

// Fonction pour vérifier si deux cartes retournées correspondent
function checkForMatch() {
    const [card1, card2] = flippedCards;

    if (card1.id === card2.id) {
        // Correspondance trouvée, marquer les cartes comme "matched"
        const matchedElements = document.querySelectorAll(`#${card1.id}, #${card2.id}`);
        matchedElements.forEach(element => {
            element.classList.add('matched', 'animate-match'); // Ajout de la classe pour l'animation
        });

        // Vider le tableau des cartes retournées
        flippedCards = [];

        // Vérifier s'il reste des cartes à retourner
        checkWin();
    } else {
        // Attendre un court instant avant de retourner les cartes qui ne correspondent pas
        setTimeout(() => {
            const allFlippedCards = document.querySelectorAll('.card.flipped:not(.matched)');
            allFlippedCards.forEach(card => card.classList.remove('flipped'));
            flippedCards = [];
        }, 1000); // Attendre 1 seconde (1000ms) avant de retourner les cartes
    }
}

// Variable pour stocker les pays affichés
let displayedCountries = [];

// Fonction pour afficher les noms des pays correspondants
function displayMatchedCountry() {
    // Réinitialiser la zone matchZone
    matchZone.innerHTML = '';

    const matchedElements = document.querySelectorAll('.card.matched');
    const matchedIds = Array.from(matchedElements).map(element => element.id);

    const matchedCountries = patchCountries.filter(country => matchedIds.includes(country.id));

    matchedCountries.forEach(country => {
        // Créer un élément pour afficher le pays
        const countryElement = createCountryElement(country.nom, country.id); // Ajout de l'ID du pays
        matchZone.appendChild(countryElement);
    });

    // Ajouter les écouteurs d'événements pour le survol des pays après avoir affiché les pays
    addCountryHoverListeners();
}

// Fonction pour créer un élément pour afficher le nom du pays
function createCountryElement(countryName, countryId) {
    const countryElement = document.createElement('div');
    countryElement.classList.add('country');
    countryElement.textContent = countryName;
    countryElement.dataset.countryId = countryId; // Ajout de l'ID du pays comme attribut data
    return countryElement;
}

// Fonction pour gérer le survol des div "country" et le changement de style des éléments correspondants
function handleCountryHover(countryId) {
    const matchingCards = document.querySelectorAll(`.card#${countryId}`);
    matchingCards.forEach(card => {
        card.classList.add('country-hover');
    });
}

// Fonction pour retirer le style lorsqu'on arrête de survoler un pays
function handleCountryHoverOut(countryId) {
    const matchingCards = document.querySelectorAll(`.card#${countryId}`);
    matchingCards.forEach(card => {
        card.classList.remove('country-hover');
    });
}

// Écouteurs d'événements pour le survol des pays
function addCountryHoverListeners() {
    const countries = document.querySelectorAll('.country');
    countries.forEach(country => {
        const countryId = country.dataset.countryId;
        country.addEventListener('mouseover', () => handleCountryHover(countryId));
        country.addEventListener('mouseout', () => handleCountryHoverOut(countryId));
    });
}

// Fonction pour gérer le retournement des cartes
function handleCardFlip(card) {
    const flipped = document.querySelectorAll('.card.flipped:not(.matched)');
    if (flipped.length === 2) {
        // Deux cartes sont déjà retournées, vérifier si elles correspondent
        const [card1, card2] = flipped;
        flippedCards = [card1, card2];
        checkForMatch();
    }
}

// Fonction pour afficher les cartes dans la zone de jeu avec animations de retournement
function displayCards() {
    gameBoard.innerHTML = '';
    selectedCards.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.classList.add('card');

        // Création des éléments pour la face avant et le dos de la carte
        let frontContent = '';
        let backContent = '<div class="back"></div>'; // Ajout du dos de la carte

        // Vérification si le contenu de la carte est une image ou du texte
        if (isImage(card.nom)) {
            // Si c'est une image, afficher l'image dans la face avant
            frontContent = `<div class="front"><img src="${card.nom}" alt="image"></div>`;
        } else {
            // Sinon, afficher le texte dans la face avant
            frontContent = `<div class="front">${card.nom}</div>`;
        }

        // Ajout du contenu à la face avant de la carte
        cardElement.innerHTML = frontContent + backContent;
        cardElement.id = card.id;

        // Ajout d'un écouteur d'événement pour retourner la carte au clic
        if (!cardElement.classList.contains('matched')) {
            cardElement.addEventListener('click', function() {
                if (!this.classList.contains('flipped')) {
                    this.classList.toggle('flipped'); // Ajoute ou retire la classe 'flipped' lors du clic
                    handleCardFlip(this);
                }
            });
        }

        // Ajout de la carte à la zone de jeu
        gameBoard.appendChild(cardElement);
    });
}

// Bouton pour lancer le jeu
launchGameButton.addEventListener('click', function () {
    createAndShuffleCards();
    displayCards();
});

    // Fonction pour vérifier si un chemin est une image
    function isImage(path) {
        return /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(path);
    }
    
    // Fonction pour mettre à jour le compteur et les tableaux
    function updateCheckboxes() {
        checkboxesChecked = 0;
        choix1 = [];
        choix2 = [];
        if (checkboxPays.checked) {
            checkboxesChecked++;
            if (checkboxesChecked === 1) {
                randomCountries.forEach(country => choix1.push({ nom: country.nom, id: generateUniqueID(choix1.length) }));
            } else if (checkboxesChecked === 2) {
                randomCountries.forEach(country => choix2.push({ nom: country.nom, id: generateUniqueID(choix2.length) }));
            }
        }
        if (checkboxCapitales.checked) {
            checkboxesChecked++;
            if (checkboxesChecked === 1) {
                randomCountries.forEach(country => choix1.push({ nom: country.capitale, id: generateUniqueID(choix1.length) }));
            } else if (checkboxesChecked === 2) {
                randomCountries.forEach(country => choix2.push({ nom: country.capitale, id: generateUniqueID(choix2.length) }));
            }
        }
        if (checkboxDrapeaux.checked) {
            checkboxesChecked++;
            if (checkboxesChecked === 1) {
                randomCountries.forEach(country => choix1.push({ nom: country.drapeau, id: generateUniqueID(choix1.length) }));
            } else if (checkboxesChecked === 2) {
                randomCountries.forEach(country => choix2.push({ nom: country.drapeau, id: generateUniqueID(choix2.length) }));
            }
        }
        if (checkboxCartes.checked) {
            checkboxesChecked++;
            if (checkboxesChecked === 1) {
                randomCountries.forEach(country => choix1.push({ nom: country.image, id: generateUniqueID(choix1.length) }));
            } else if (checkboxesChecked === 2) {
                randomCountries.forEach(country => choix2.push({ nom: country.image, id: generateUniqueID(choix2.length) }));
            }
        }
        if (checkboxesChecked === 2) {
            launchGameButton.style.display = 'block';
            disableRemainingCheckboxes([checkboxPays, checkboxCapitales, checkboxDrapeaux, checkboxCartes]);
        } else {
            launchGameButton.style.display = 'none';
            enableCheckboxes();
        }
    }
    
    // Fonction pour désactiver les cases à cocher restantes une fois deux cases cochées
    function disableRemainingCheckboxes(checkboxes) {
        checkboxes.forEach(checkbox => {
            if (!checkbox.checked && checkboxesChecked === 2) {
                checkbox.disabled = true;
            }
        });
    }
    
    // Fonction pour réactiver toutes les cases à cocher
    function enableCheckboxes() {
        [checkboxPays, checkboxCapitales, checkboxDrapeaux, checkboxCartes].forEach(checkbox => {
            checkbox.disabled = false;
        });
    }
    
    // Écouteurs d'événements pour les cases à cocher
    checkboxPays.addEventListener('change', updateCheckboxes);
    checkboxCapitales.addEventListener('change', updateCheckboxes);
    checkboxDrapeaux.addEventListener('change', updateCheckboxes);
    checkboxCartes.addEventListener('change', updateCheckboxes);
    
    // Appel de la fonction pour initialiser l'état des cases à cocher
    updateCheckboxes();

    function checkWin() {
        const allCards = document.querySelectorAll('.card');
        const allMatchedCards = document.querySelectorAll('.card.matched');
        const messageSpan = document.querySelector('.message');
    
        if (allCards.length === allMatchedCards.length && displayedCountries.length === patchCountries.length) {
            const countryElements = document.querySelectorAll('#matchZone .country');
            if (countryElements.length === 10) {
                messageSpan.style.display = 'flex'; // Afficher le message
            }
        } else {
            messageSpan.style.display = 'none'; // Cacher le message sinon
        }
    
        // Afficher les noms des pays correspondants
        displayMatchedCountry();
    }        
    
    // Bouton pour lancer le jeu
    launchGameButton.addEventListener('click', function () {
        patchCountries = [];
        randomCountries.forEach(country => {
            patchCountries.push({ nom: country.nom, id: generateUniqueID(patchCountries.length) });
        });
        console.log("Launch game with:");
        console.log("Choix 1:", choix1);
        console.log("Choix 2:", choix2);
        console.log("Patch Countries:", patchCountries);
    });
    
