import request from "supertest";
import { jest } from "@jest/globals";
import app from "../../src/app.js";
import { paginate, getReviews } from "../../src/reviews.js";
import api from "../../src/api.js";

/* const loadMovieReviews = async (id, page) => {
  try {
    const res = await fetch(
      `http://localhost:5080/api/movies/${id}/reviews?page=${page}&pageSize=5`
    );
    const reviews = await res.json();
    return reviews;
  } catch (err) {
    console.log(err);
  }
}; */

const mockReq = {
  query: "pageSize=5",
  query: "page=1",
};

const mock = jest.spyOn(api, "fetchReviews");
mock.mockReturnValue([
  {
    id: 57,
    attributes: {
      comment: "This is also great!",
      rating: 1,
      author: "Richard",
      verified: false,
      createdAt: "2022-01-27T13:25:43.197Z",
      updatedAt: "2022-01-27T13:25:43.197Z",
    },
  },
  {
    id: 57,
    attributes: {
      comment: "This is also great!",
      rating: 2,
      author: "Richard",
      verified: false,
      createdAt: "2022-01-27T13:25:43.197Z",
      updatedAt: "2022-01-27T13:25:43.197Z",
    },
  },
  {
    id: 57,
    attributes: {
      comment: "This is also great!",
      rating: 3,
      author: "Richard",
      verified: false,
      createdAt: "2022-01-27T13:25:43.197Z",
      updatedAt: "2022-01-27T13:25:43.197Z",
    },
  },
  {
    id: 57,
    attributes: {
      comment: "This is also great!",
      rating: 4,
      author: "Richard",
      verified: true,
      createdAt: "2022-01-27T13:25:43.197Z",
      updatedAt: "2022-01-27T13:25:43.197Z",
    },
  },
  {
    id: 57,
    attributes: {
      comment: "This is also great!",
      rating: 5,
      author: "Richard",
      verified: true,
      createdAt: "2022-01-27T13:25:43.197Z",
      updatedAt: "2022-01-27T13:25:43.197Z",
    },
  },
  {
    id: 57,
    attributes: {
      comment: "This is also great!",
      rating: 2,
      author: "Richard",
      verified: true,
      createdAt: "2022-01-27T13:25:43.197Z",
      updatedAt: "2022-01-27T13:25:43.197Z",
    },
  },
  {
    id: 57,
    attributes: {
      comment: "This is also great!",
      rating: 2,
      author: "Richard",
      verified: true,
      createdAt: "2022-01-27T13:25:43.197Z",
      updatedAt: "2022-01-27T13:25:43.197Z",
    },
  },
  {
    id: 57,
    attributes: {
      comment: "This is also great!",
      rating: 2,
      author: "Richard",
      verified: true,
      createdAt: "2022-01-27T13:25:43.197Z",
      updatedAt: "2022-01-27T13:25:43.197Z",
    },
  },
  {
    id: 57,
    attributes: {
      comment: "This is also great!",
      rating: 2,
      author: "Richard",
      verified: true,
      createdAt: "2022-01-27T13:25:43.197Z",
      updatedAt: "2022-01-27T13:25:43.197Z",
    },
  },
  {
    id: 57,
    attributes: {
      comment: "This is also great!",
      rating: 2,
      author: "Richard",
      verified: true,
      createdAt: "2022-01-27T13:25:43.197Z",
      updatedAt: "2022-01-27T13:25:43.197Z",
    },
  },
]);

test("Test: Specific movie reviews route", async () => {
  const payload = await request(app).get("/api/movies/4/reviews").expect(200);

  expect(payload.text.includes("meta")).toBeTruthy();
  expect(payload.text.includes("reviews")).toBeTruthy();
});

test("Test: Pagination", async () => {
  const payload = paginate(await api.fetchReviews(4), mockReq);

  expect(payload.reviews.length).toBeLessThanOrEqual(5);
  expect(payload.meta.pagination.total).toEqual(10);
  expect(payload.meta.pagination.pageCount).toEqual(2);
});

test("Test: Filter reviews and only verified", async () => {
  const payload = await getReviews(4);

  expect(payload[0].user).toBeTruthy();
  expect(payload[0].comment).toBeTruthy();
  expect(payload[0].rating).toBeGreaterThanOrEqual(0);
  expect(payload[0].verified == true).toBeTruthy();
  expect(payload.length).toEqual(7);
});
