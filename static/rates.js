function getMovieIdFromUrlPath() {
    return document.location.pathname.split("/")[2];
}

async function renderAverageRating(id) {
    const res = await fetch(`/api/movies/${id}/rating`);
    const payload = await res.json();

    console.log(payload)
}

const movieId = getMovieIdFromUrlPath();

renderAverageRating(movieId);