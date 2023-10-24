/* 
EJERCICIO 9:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/

function numMaxMinArray() {

    const numArray = new Array(10).fill().map(() => Math.floor(Math.random()*100));
    
    console.log(numArray);
    
    let numMax = 0;
    let numMin = 101;
    
    function defMaxMinNumber(numMax, numMin){
        
       for (let i = 0; i < 10; i++) {
    
        if (numMax < numArray[i]) {
        numMax = numArray[i];
        }
        if (numMin > numArray[i]) {
        numMin = numArray[i];
        }    
       }
       return [numMax, numMin];    
    }   
    
    myArray = (defMaxMinNumber(numMax, numMin));
    
    return (`el mumero máximo es ${myArray[0]} y el mínimo es  ${myArray[1]}`);
    
    }
    
    showContent(9, numMaxMinArray());