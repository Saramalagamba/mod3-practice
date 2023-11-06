/* 
EJERCICIO 19:
Dada una cadena de texto, crea una función que devuelva un objeto donde
las claves (keys) son cada una de las letras de la cadena y el valor el
número de veces que se repite cada una de ellas.
Ejemplo: "Hello world"
{
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    r: 1,
    d: 1,
}
Nota: siempre letras minúsculas y sin tildes (para simplificar)
*/

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
    return objectText;
}
showContent(19, objetcKeysText("Holá múndo"));