
// ! PAROLE PALINDROME ! \\
    
// creo una costante che chieda una parola all'utente
const userWord = prompt('Inserisci una parola Palindroma');
    
const reverseWord = wordReverse(userWord);


// creo un if per verificare che la parola sia palindroma
if (userWord == reverseWord) {
    
    console.log('la parola è palindroma')

} else {

    console.log('la parola non è palindroma')

}



// * FUNCTION * \\
function wordReverse (word) {
    
    // creo il contatore per il ciclo while
    let lengthWord = userWord.length - 1;
    
    // creo una variabile per visualizzare la parola al contrario
    let wordFlip = '';
    
    // creo il ciclo while che parte dalla fine
    while ( lengthWord >= 0 ) {
        
        // sommo a reverseword ogni carattere della parola inserita
        wordFlip += userWord[lengthWord];
        
        
        lengthWord--;
    }
    
    console.log(wordFlip);

    // INPUT RITORNO ALTRIMENTI L'IF NON FUNZIONA
    return wordFlip;
}
// * FUNCTION * \\

// ! PAROLE PALINDROME ! \\