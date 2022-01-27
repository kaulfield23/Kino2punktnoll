import fetch from "node-fetch";
const url = "https://lernia-kino-cms.herokuapp.com/api";
//fetches all the movies from API
export async function fetchAllMovies() {
    const res = await fetch(url + '/movies');
    const payload = await res.json();
    return payload.data;
}

//fetches a specific movie from API
export async function fetchChosenMovie(id) {
    const res = await fetch(url + `/movies/${id}`);
    const payload = await res.json();
    return payload.data;
}
export async function fetchReviews(movieId) {
    const res = await fetch(url + '/reviews' + `?filters[movie]=${movieId}`)
    const payload = await res.json();
    return payload.data;
}

export default {
    fetchAllMovies: fetchAllMovies,
    fetchChosenMovie: fetchChosenMovie,
    fetchReviews: fetchReviews,
};