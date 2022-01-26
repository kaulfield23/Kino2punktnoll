import fetch from "node-fetch";
// const url = "https://lernia-kino-cms.herokuapp.com/api/movies/";
const url = "https://lernia-kino-cms.herokuapp.com/api";
//fetches all the movies from API
export async function fetchAllMovies() {
    const res = await fetch(url);
    const payload = await res.json();
    return payload.data;
}

//fetches a specific movie from API
export async function fetchChosenMovie(id) {
    const res = await fetch(url + id);
    const payload = await res.json();
    return payload.data;
}
export async function fetchReviews() {
    const res = await fetch(url + '/reviews')
    const payload = await res.json();
    return payload.data;
}

export default {
    fetchAllMovies,
    fetchChosenMovie,
    fetchReviews,
};