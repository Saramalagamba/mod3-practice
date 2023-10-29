// /* 
// EJERCICIO 17:
// Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
// Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
// "la cadena 'hola mundo' no es un isograma"
// */

function numberOfWordsArray(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let myStrtoArray = text.split("");
    let alphabetArray = alphabet.split("");
    let myArrayCounter = [];
    for (i = 0; i < alphabetArray.length; i++) {
        myArrayCounter[i] = 0;
        for (j = 0; j < myStrtoArray.length; j++) {
            if (alphabetArray[i] === myStrtoArray[j]) {
                myArrayCounter[i]++;
            }
        }
    }
    return myArrayCounter;
}

function isAnIsogram(text) {
    textWhithoutblank = transformText(text);
    textWhithoutaccent = replaceText(textWhithoutblank);
    arrayOfword = numberOfWordsArray(textWhithoutaccent);
    let equalWord = true;
    let valueWord = 0;
    for (i = 0; i < arrayOfword.length; i++) {
        if (valueWord !== 0) {
            if (valueWord !== arrayOfword[i] && valueWord !== 0 && arrayOfword[i] !==0) {
                equalWord = false;
            }
        } else {valueWord = arrayOfword[i]}
    }

    if (equalWord) {
        return (`la cadena '${text}' es un isograma`);
    }else{
        return (`la cadena '${text}' no es un isograma`);}
    
}

showContent(17, isAnIsogram("Hola mundo"));
