/* 
EJERCICIO 2:
Muestra el siguiente mensaje dependiendo de si un número es par o impar:
“Number 34 is even” ó “Number 13 is odd”
*/

function numEvenOdd(num) {
    if ((num % 2) === 0) {
    return `Number ${num} is even`;
  } else {
    return `Number ${num} is odd`; 
}
}

  showContent(2, numEvenOdd(9));