/* 
EJERCICIO 12:
Filtra las peliculas que pertenezcan a la categoria "Drama" e incluye solo el título y la descripción
Sugerencia: puedes usar la variable "categories" en el archivo "src/js/data/movies.js"
*/

  
  const arrayOfCategories = movies.map((movie) => ({title: movie.title, category: movie.category, description: movie.description}));
  const filterArrayOfCategories = arrayOfCategories.filter((film) => film.category === categories.drama);
  
  showContent(12, filterArrayOfCategories);