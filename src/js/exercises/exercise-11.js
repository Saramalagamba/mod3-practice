/* 
EJERCICIO 11:
Ordena las peliculas por valoracion (propiedad "rating") de mayor a menor
*/
  
  const arrayOfRating = movies.map((movie) => movie.rating);
  const sortedArrayOfRating = arrayOfRating.sort();
  
  showContent(11, sortedArrayOfRating);