//get movie id for rating from url
function getMovieIdFromUrlPath() {
    return document.location.pathname.split("/")[2];
}

//generate rate to frontend
async function renderAverageRating(id) {
    const res = await fetch(`/api/movies/${id}/rating`);
    const payload = await res.json();
    const ratingDiv = document.querySelector('.rating');
    const rate = document.createElement('h3');
    rate.setAttribute('class', 'averageRate');
    rate.textContent = `Rate : ${payload}`;
    rate.style.color = '#008a8a';
    ratingDiv.appendChild(rate)
}

const movieId = getMovieIdFromUrlPath();

renderAverageRating(movieId);