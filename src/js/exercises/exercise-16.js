/* 
EJERCICIO 16:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
*/

function calculateCentury (year){
    let century = Math.floor((year / 100)) + 1;
    return (`El año ${year} corresponde al siglo ${century}`)
}
showContent(16, calculateCentury(1975));