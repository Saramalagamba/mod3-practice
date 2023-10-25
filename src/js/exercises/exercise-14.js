/* 
EJERCICIO 14:
Muestra un array que solo incluya la pelicula mejor valorada de cada uno de estos actores:
- Leonardo Dicaprio
- Robert De Niro
- Tom Hanks
*/


function filterActorBestRating() {
    let arrayOfActors = movies.map((movie) => ({ rating: movie.rating, title: movie.title, actors: movie.actors}));
    let maxRatingLeo = 0;
    let maxRatingRobert = 0;
    let maxRatingTom = 0;
    let bestfilmLeo = "";
    let bestfilmRobert = "";
    let bestfilmTom = "";
    for (let i = 0; i < arrayOfActors.length; i++) {
        if (arrayOfActors[i].actors === "Leonardo Dicaprio") {
            if (maxRatingLeo < rating[i]) {
                maxRatingLeo = rating[i];
                bestfilmLeo = title[i];
            }
        }
        if (arrayOfActors[i].actors === "Robert De Niro") {
            if (maxRatingRobert < movie.rating[i]) {
                maxRatingRobert = movie.rating[i];
                bestfilmRobert = movie.title[i];
            }
        }
        if (arrayOfActors[i].actors === "Tom Hanks") {
            if (maxRatingTom < movie.rating[i]) {
                maxRatingTom = movie.rating[i];
                bestfilmTom = movie.title[i];
            }
        }
    }
    let arrayBestFilmActors =[];
    arrayBestFilmActors = arrayBestFilmActors.push [bestfilmLeo, bestfilmRobert, bestfilmTom];
    return arrayBestFilmActors;
}
showContent(14, filterActorBestRating());
