
const submitPostReview = document.querySelector('#submitPostReview');
const postForm = document.querySelector('#postForm');

postForm.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  const rating = document.querySelector('#ratingPostReview');
  const name = document.querySelector('#namePostReviewForm');
  const comment = document.querySelector('#commentPostReview');
  const movieId = ev.target.movie.value;
  
  const commentPosting = await fetch(`/api/movies/${movieId}/reviews`, {
    method: 'POST',
    mode: 'cors',
    credential: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "data": {
        "comment": comment.value,
        "rating": parseInt(rating.value),
        "author": name.value,
        "verified": null,
        "movie": movieId,
        "createdAt": new Date(),
        "updatedAt": new Date(),
      }
    })
  });
  postForm.reset();
});

