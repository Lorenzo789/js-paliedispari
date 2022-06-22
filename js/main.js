
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



// ? PARI E DISPARI ? \\

// chiedo all'utente di scegliere tra pari e dispari
const userChoice = prompt('Scegli pari o Dispari')

// chiedo all'utente di scrivere un numero da 1 a 5
const userNumber = parseInt( prompt ('Inserisci un numero da 1 a 5') );
console.log(userNumber);

// variabile che si riferisce alla fuzioe che genera un numero randomico per l'ai
const aiNumber = randomNumberAi(1 , 5);
console.log(aiNumber);

// creo una variabile che sommi i due risultati
let sum = userNumber + aiNumber;
console.log(sum);

// variabile che si riferisce alla fuzione che determina se la somma sia pari o dispari
const determinesEvenOrOdd = evenOrOdd(sum);

if (determinesEvenOrOdd % 2 == 0) {
    
    console.log()

}





// * FUNCTION * \\
function randomNumberAi(min , max) {
    
    // genero un numero randomico per il computer
    let randomNumber = Math.floor( Math.random () * (max - min) + min);

    return randomNumber;

}


function evenOrOdd (num) {
    
    if (num % 2 == 0) {
        
        console.log('il numero è pari')

    } else if (num % 2 !== 0) {
        
        console.log('il numero è disparo')

    }

    return num;

}
// * FUNCTION * \\

// ? PARI E DISPARI ? \\