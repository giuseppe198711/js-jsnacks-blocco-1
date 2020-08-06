//Genera un numero casuale per il pc poi chiedi all’utente di inserire un numero
//con un prompt infine stampa la somma dei due numeri

// genero un numero casuale compreso tra 1 e 100
var numeroRandom = Math.floor(Math.random() * 100) + 1;
console.log("numero random: " + numeroRandom);
// chiedo all'utente di inserire un numero intero
var numeroUtente = parseInt(prompt("inserisci un numero intero"));
// solo se il numero è intero proseguo con il programma
if(!isNaN(numeroUtente)) {
  // sommo i 2 numeri
  var somma = numeroRandom + numeroUtente;
  // stampo il risultato
  console.log("il totale è: " + somma);
} else {
  alert("non hai inserito un numero!");
}
