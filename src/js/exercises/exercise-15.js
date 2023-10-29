/* 
EJERCICIO 15:
Muestra un array con el título y la descripción de las mejores peliculas ordenadas de mejor a peor, 
siendo las mejores aquellas cuya valoración es superior a la valoración media de todas las películas
*/

function clonArrayofActor() {
    return movies.map((movie) => ({ rating: movie.rating, title: movie.title, description: movie.description }));
}
function orderOfArrayOfActors(arrayOfActors) {
    let resultOrdened = arrayOfActors.sort((a, b) => {
        if (a.rating < b.rating) {
            return 1;
        }
        if (a.rating > b.rating) {
            return -1;
        }
        return 0;
    });
    return resultOrdened;
}
function bestFilmRating(arrayOfOrdenedFilm) {
    const initialValue = 0;
    let sumOfRating = 0;
    for (let i = 0; i < arrayOfOrdenedFilm.length; i++) {
        sumOfRating += arrayOfOrdenedFilm[i].rating;
    }
    const promedio = sumOfRating / arrayOfOrdenedFilm.length;
    let bestFilmRating = [];
    for (let i = 0; i < arrayOfOrdenedFilm.length; i++) {
        if (promedio < arrayOfOrdenedFilm[i].rating) {
            bestFilmRating.push(arrayOfOrdenedFilm[i].title, arrayOfOrdenedFilm[i].description);
        }
    }
    return bestFilmRating;
}
let arrayOfAllFilms = clonArrayofActor();
let arrayOfOrdenedFilm = orderOfArrayOfActors(arrayOfAllFilms);
showContent(15, bestFilmRating(arrayOfOrdenedFilm));


