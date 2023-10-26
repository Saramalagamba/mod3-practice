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
        if (arrayOfActors[i].actors.includes("Leonardo DiCaprio")) {
            if (maxRatingLeo < arrayOfActors[i].rating) {
                maxRatingLeo = arrayOfActors[i].rating;
                bestfilmLeo = arrayOfActors[i].title;
            }
        }
        if (arrayOfActors[i].actors.includes("Robert De Niro")) {
            if (maxRatingRobert < arrayOfActors[i].rating) {
                maxRatingRobert = arrayOfActors[i].rating;
                bestfilmRobert = arrayOfActors[i].title;
            }
        }
        if (arrayOfActors[i].actors.includes("Tom Hanks")) {
            if (maxRatingTom < arrayOfActors[i].rating) {
                maxRatingTom = arrayOfActors[i].rating;
                bestfilmTom = arrayOfActors[i].title;
            }
        }
    }

    return [bestfilmLeo, bestfilmRobert, bestfilmTom];
}
showContent(14, filterActorBestRating());
