import { jest } from "@jest/globals";
import { getAverageRating } from "../src/getRating.js";
import api from "../src/api";

test("get the right average of mocked api when reviews are more than 5", async () => {
  //when the reviews are more than 5
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
        verified: true,
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
        verified: true,
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
  ]);

  const rating = await getAverageRating(4);

  expect(rating).toEqual(2.7);
  expect(rating).toBeGreaterThan(-1);
  expect(typeof rating).toBe("number");
});

test("get the right average rating/2 of mocked IMDB api when reviews are less than 5", async () => {
  //when review is less than 5
  const mockReviews = jest.spyOn(api, "fetchReviews");
  mockReviews.mockReturnValue([
    {
      id: 57,
      attributes: {
        comment: "This is also great!",
        rating: 1,
        author: "Richard",
        verified: null,
        createdAt: "2022-01-27T13:25:43.197Z",
        updatedAt: "2022-01-27T13:25:43.197Z",
      },
    },
  ]);

  //it will check IMDB rating and return rating/2
  const mockIMDB = jest.spyOn(api, "fetchIMDBRate");
  mockIMDB.mockReturnValue({
    "@type": "imdb.api.title.ratings",
    id: "/title/tt0468569/",
    title: "The Dark Knight",
    titleType: "movie",
    year: 2008,
    bottomRank: 9342,
    canRate: true,
    rating: 10,
    ratingCount: 2485344,
  });

  const rating = await getAverageRating(2);

  expect(rating).toEqual(5);
  expect(rating).toBeGreaterThan(-1);
  expect(typeof rating).toBe("number");
});
