// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
// variabile inserimento numero
var numero = parseInt(prompt("inserisci un numero"));

// condizione pari
if (numero % 2 == 0) {
  console.log(numero);
   // condizione dispari
} else {
  console.log(numero + 1);
}
