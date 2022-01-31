import fetch from "node-fetch";
const url = "https://lernia-kino-cms.herokuapp.com/api/movies/";

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

export const loadReviewsData = async (id) => {
  try {
    const api = `https://lernia-kino-cms.herokuapp.com/api/reviews?filters[movie]=${id}`;
    const res = await fetch(api);
    const reviews = await res.json();
    return reviews.data;
  } catch (err) {
    console.log(err);
  }
};

//test

const loadMovieReviews = async (id, page) => {
  try {
    const res = await fetch(
      `http://localhost:5080/api/movie/${id}/reviews?page=${page}&pageSize=5`
    );
    const reviews = await res.json();
    return reviews;
  } catch (err) {
    console.log(err);
  }
};

export default {
  fetchAllMovies,
  fetchChosenMovie,
  loadReviewsData,
  loadMovieReviews,
};
