async function renderAverageRating() {
    const res = await fetch('/api/movies/:movieId/rating');
    const payload = await res.json();

    console.log(payload)
}