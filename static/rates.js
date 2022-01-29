async function renderAverageRating() {
    const res = await fetch('/api/movies/4/rating');
    const payload = await res.json();

    console.log(payload)
}
renderAverageRating();