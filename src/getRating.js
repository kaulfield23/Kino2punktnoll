import api from "./api.js";

//function that returns only rates from APIs
export async function getAverageRating(movieId) {
  let result = null;
  const payload = await api.fetchReviews(movieId); // review doesnt have imdb id
  const reviews = payload.filter((word) => word.attributes.verified == true);

  if (reviews.length >= 5) {
    reviews.map((obj) => {
      result += obj.attributes.rating;
    });
    return parseFloat((result / reviews.length).toFixed(1));
  } else {
    const movies = await api.fetchAllMovies(movieId); //imdb id includes here
    let selectedMovie = movies.filter((obj) => obj.id == movieId);
    const imdbRating = await api.fetchIMDBRate(
      selectedMovie[0].attributes.imdbId
    );

    return parseFloat((imdbRating.rating / 2).toFixed(1));
  }
}
