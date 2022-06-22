
// creo una costante che chieda una parola all'utente
const userWord = prompt('Inserisci una parola Palindroma');

// creo una variabile per metterci le lettere della parola
let letterWord;

// creo una variabile per visualizzare la parola al contrario
let reverseWord = '';

// creo il contatore per il ciclo while
let lengthWord = userWord.length - 1;


// creo il ciclo while che parte dalla fine
while ( lengthWord >= 0 ) {

    // riassegno la variabile letter alla lunghezza di userWord - 1
    letterWord = userWord[lengthWord];

    // sommo a reverseword ogni carattere della parola inserita
   reverseWord += letterWord;

   
   lengthWord--;
}

console.log(reverseWord);