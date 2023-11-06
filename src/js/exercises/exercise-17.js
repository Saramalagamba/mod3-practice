// /* 
// EJERCICIO 17:
// Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
// Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
// "la cadena 'hola mundo' no es un isograma"
// */


function objetcKeysText(text) {
    let transformedText = transformText(text);
    transformedText = replaceText(transformedText);
    const objectText = {};
    transformedText.split('').forEach(char => {
        if (Object.keys(objectText).includes(char)) {
            objectText[char] += 1;
        }
        else {
            objectText[char] = 1;
        }
    });
    return Object.values(objectText).findIndex(value => value !== 2) === -1;
}
function isAnIsogram(text) {
let equalWord = objetcKeysText(text);
        if (equalWord) {
            return (`la cadena '${text}' es un isograma`);
        }else{
            return (`la cadena '${text}' no es un isograma`);}        
    }
showContent(17, isAnIsogram("Hola mundo"));
