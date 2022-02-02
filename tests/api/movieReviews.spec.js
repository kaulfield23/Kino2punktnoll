import fetch from "node-fetch";

const loadMovieReviews = async (id, page) => {
  try {
    const res = await fetch(
      `http://localhost:5080/api/movies/${id}/reviews?page=${page}&pageSize=5`
    );
    const reviews = await res.json();
    return reviews;
  } catch (err) {
    console.log(err);
  }
};

test("Test specific movie reviews route", async () => {
  const payload = await loadMovieReviews(4, 1);

  expect(payload.meta.pagination.total).toBeTruthy();

  if (payload.meta.pagination.total > 0) {
    expect(payload.reviews.length).toBeGreaterThan(0);
    expect(payload.reviews.length).toBeLessThanOrEqual(5);
    expect(payload.reviews[0].user).toBeTruthy();
    expect(payload.reviews[0].comment).toBeTruthy();
    expect(payload.reviews[0].rating).toBeGreaterThanOrEqual(0);
  }
  expect(200);
});

test("Test specific movie reviews pagination if 5 or more reviews", async () => {
  const payload = await loadMovieReviews(4, 1);

  if (payload.meta.pagination.total > 5) {
    expect(payload.reviews.length).toBeLessThanOrEqual(5);
    expect(payload.meta.pagination.pageCount).toBeGreaterThan(1);
  }
  expect(200);
});

test("Only show verified reviews from CMS for rating and reviews", async () => {
  const payload = await loadMovieReviews(4, 1);

  if (payload.reviews.length > 0) {
    expect(payload.reviews[0].verified).toBeTruthy();
    expect(payload.reviews[0].rating).toBeGreaterThanOrEqual(0);
  }
  expect(200);
});
