import api from "../../src/api.js";

test("Test specific movie reviews route with pagenation", async () => {
  const payload = await api.loadMovieReviews(4, 1);
  expect(payload.reviews.length).toBeGreaterThan(0);
  expect(payload.reviews.length).toBeLessThanOrEqual(5);

  expect(payload.meta.pagination.total).toBeGreaterThan(5);
  expect(payload.meta.pagination.pageCount).toBeGreaterThan(1);

  expect(200);
});
