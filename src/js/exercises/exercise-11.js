/* 
EJERCICIO 11:
Ordena las peliculas por valoracion (propiedad "rating") de mayor a menor
*/

function sortedArrayforRating(){  
    const arrayOfRating = movies.map((movie) => movie.rating);
    const sortedArrayOfRating = arrayOfRating.sort();  
    return sortedArrayOfRating;
  }
  showContent(11, sortedArrayforRating());