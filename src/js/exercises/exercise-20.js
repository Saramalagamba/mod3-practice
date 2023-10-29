/* 
EJERCICIO 20:
Los números de Fibonacci es una secuencia de números donde cada número se calcula en base a los dos anteriores:
Fib(n) = (n-2) + (n-1)

Excepto para cuando n > 2:
Fib(0) = 0
Fib(1) = 1

Calcula el Fib de un número pasado como parámetro y muestra un mensaje:
"El vigésimo número de la serie de Fibonacci es 6765"

Nota: evita calcular números altos.
*/

function calculateFibonacci(serieFib) {
    switch (serieFib) {
        case 0: return (`El 0 número de la serie de Fibonacci es 0`);
            break;
        case 1: return (`El primer número de la serie de Fibonacci es 1`);
            break;
        case 2: return (`El segundo número de la serie de Fibonacci es 1`);
            break;
        case 3: return (`El tercer número de la serie de Fibonacci es 2`);
            break;
        default:
            let arrayOfFibo = [0, 1, 1, 2];
            let result;
            for (i = 4; i <= serieFib; i++) {
                result = 0;
                result = arrayOfFibo[i - 1] + arrayOfFibo[i - 2];
                console.log(result);
                arrayOfFibo.push(result);
                console.log(arrayOfFibo);
            }
            return (`El ${serieFib}º número de la serie de Fibonacci es ${result}`);
    }
}
showContent(20, calculateFibonacci(9));