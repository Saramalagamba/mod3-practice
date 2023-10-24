/* 
EJERCICIO 5:
Escribe una función llamada "repetitions" que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
repetitions(‘code’) // result: “COoDddEeee”
repetitions(‘list’) // result: “LIiSssTttt”
repetitions(function) // result: “FUuNnnTtttIiiiiOoooooNnnnnnn”

*/


function repetitions(str) {

    let text="";

    for (let i = 0; i < str.length; i++) {        

        text += str.charAt(i).toUpperCase();

        if (i > 0) {

            for (let j = 0 ; j < i; j++)
            text += str.charAt(i);
        }       
    }
    
    return text;
}

showContent(5, repetitions("function"));
