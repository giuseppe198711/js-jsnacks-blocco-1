// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga
// definisco la variabile della prima parola
var primaParola = prompt("inserire prima parola");
// definicsco la variabile della seconda parola
var secondaParola = prompt("inserire seconda parola");
// definisco la prima condizione per cui la prima parola è maggiore della seconda
if (primaParola.length > secondaParola.length){
  console.log(secondaParola + " " + primaParola);
  // definisco la seconda condizione per cui la prima parola è minore della seconda
} else if (primaParola.length < secondaParola.length){
  console.log(primaParola + " " + secondaParola);
  // definisco la terza condizione per cui la prima parola è uguale come lunghezza alla seconda
} else {
  console.log("le due parole hanno la stessa lunghezza");
}
