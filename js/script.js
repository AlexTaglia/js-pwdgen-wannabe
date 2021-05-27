alert("Genera la tua SUPER Password");

var firstName = prompt('Inserisci il tuo nome');
var lastName = prompt('Inserisci il tuo cognome');
var favoriteColor = prompt('Inserisci il tuo colore preferito');
var randomNumber = "21";
var superPassword = firstName + lastName + favoriteColor + randomNumber;

document.getElementById('password').innerHTML = "La tua password è: " + superPassword;
