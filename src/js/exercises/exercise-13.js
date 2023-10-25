/* 
EJERCICIO 13:
Agrupa en un array las peliculas por categorias:
[
    {
        Drama: {
            {
                title: "Fight Club",
                director: "David Fincher",
                actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
                year: 1999,
                description:
                "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
                category: "Drama",
                rating: 8.8,
            },
            Action: {
                ...
            },
            ...
        }
    }
]
*/


function filterAndConcatArrayofCategories() {
    let arrayOfTypeCategories = Object.values(categories);
    let arrayOfConcatCategories = [];
    for (let i = 0; i < arrayOfTypeCategories.length; i++) {
        const filterArrayOfCategories = movies.filter((film) => film.category === arrayOfTypeCategories[i]);
        arrayOfConcatCategories.push(
            {
                categoria: arrayOfTypeCategories[i],
                peliculas: filterArrayOfCategories
            }
        )
    }
    return arrayOfConcatCategories;
}
showContent(13, filterAndConcatArrayofCategories());