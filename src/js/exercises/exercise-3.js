/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>”
*/

function counterVowels(str) {

    let transfLowerCase = str.toLowerCase();

    let result = 0;

    for (let i = 0; i < transfLowerCase.length; i++) {

        let vowel = transfLowerCase.charAt(i);

        switch (vowel){

            case "a": ++result;
                break;
            case "e": ++result;
                break;
            case "i": ++result;
                break;
            case "o": ++result;
                break;
            case "u": ++result;
                break;
            default: console.log("no es una vocal");

        }

    }

    return `Number of vowels is ${result}`;

}

showContent(3, counterVowels("EI94aadPEIDMHDUWEHu"));
