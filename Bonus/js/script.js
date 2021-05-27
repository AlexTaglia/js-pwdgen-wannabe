alert("Genera la tua SUPER Password");

var partOne = prompt('Inserisci una lettera MAIUSCOLA');
var partTwo = prompt('Inserisci una lettera minuscola');
var partThree = prompt('Inserisci un numero a caso da 0 a 9');
var partFour = prompt('Inserisci un carattere speciale es:(@!$€)');
var partFive = prompt('Inserisci una parola MAIUSCOLA');
var partSix = prompt('Inserisci un carattere speciale es:(@!$€)');
var partSeven = prompt('Inserisci una lettera MAIUSCOLA');
var partEight = prompt('Inserisci una lettera minuscola');
var partNine = prompt('Inserisci un numero a caso da 0 a 9');


var firstPart = partOne + partTwo + partThree;
var secondPart = partFour + partFive + partSix;
var thirdPart = partSeven + partEight + partNine;
var partDash = "-";

var superPassword = firstPart + partDash + secondPart + partDash + thirdPart;

var tryAgain = "Mi dispiace, la tua password è gia comparsa in un Leak, generane un'altra."

document.getElementById('password').innerHTML = "La tua password è: " + superPassword;
document.getElementById('note').innerHTML = tryAgain;