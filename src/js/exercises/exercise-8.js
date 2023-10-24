/* 
EJERCICIO 8:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar las funciones de ejercicios anteriores).
*/

const alphabet = "abcdefghijklmnopqrstuvwxyz";
function positionAlphabetArray(text){
text1 = transformText(text);
text2 = replaceText(text1);
myStrtoArray = text2.split("");
let alphabetArray = alphabet.split("");
let myArrayPosition = [];
myStrtoArray.forEach(char => myArrayPosition.push(alphabetArray.indexOf(char)));
return myArrayPosition;
}
showContent(8, positionAlphabetArray("lfksjd foiaal éaI ERNÍÚkf"));
