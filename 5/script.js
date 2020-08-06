//genera un numero casuale e poi
//stampalo se è pari nel box rosso altrimenti in nel box verde

// genero un numero casuale compreso fra 1 e 100
var numeroRandom = Math.floor(Math.random() * 100) + 1;
console.log("numero random: " + numeroRandom);
// se è pari lo inserisco nel box rosso se è dispari lo inserisco nel box verde
if(numeroRandom % 2 == 0) {
  var box = document.getElementById("box-rosso");
} else {
  var box = document.getElementById("box-verde");
}
// stampo il risultato
box.innerHTML = numeroRandom;
