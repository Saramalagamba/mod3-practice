/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
“H, m lrnng Jvscrpt” // string original: “Hi, I am learning Javascript”
*/

function remuveVowels(str) {

    let allVowels = "aeiouAEIOUáéíóúÁÉÍÓÚ";
    let vowel;

    for (let i = 0; i < allVowels.length; i++) {

        vowel = allVowels.charAt(i);
        if (str.includes(vowel)){
            str = str.replaceAll(vowel, "");
        }
   
    }

    return str;

}

showContent(4, remuveVowels("Hi, I am learning Javascript"));
