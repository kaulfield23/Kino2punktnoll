//Skriv automatiskt test som verifierar att recensioner inte går att skicka utan token.

import { jest } from "@jest/globals";
import request from "supertest";
import app from "../src/app.js";
import api from "../src/api.js";
import JWT from "jsonwebtoken";

// test("Return 401 status if token is wrong", async () => {
//   const testing = await request(app)
//     .post("/api/movies/1/reviews")
//     .set("Authorization", "bearer :hello")
//     .expect(401);
// });

test("Return 401 status if there is no authorization with token", async () => {
  const testing = await request(app).post("/api/movies/1/reviews").expect(401);
});

test("Post data when token is right", async () => {
  //fake datas
  const fakeData = {
    data: {
      comment: "this movie is good",
      rating: 1,
      author: "hollow knight",
      verified: false,
      movie: 10000,
    },
  };

  const token = JWT.sign(
    {
      username: "hollow knight",
    },
    "thisisapassword"
  );

  const fakeURL = "http://www.iamthehollowknight.com";

  const mockPostData = jest.spyOn(api, "postData");
  mockPostData(fakeURL, fakeData);
  mockPostData.mockImplementation(() =>
    Promise.resolve("hello data has sent!")
  );

  const testing = await request(app)
    .post("/api/movies/1/reviews")
    .set("Authorization", "bearer " + token)
    .expect(200);

  expect(mockPostData).toBeCalled();
  expect(mockPostData).toBeCalledWith(fakeURL, fakeData);
});
