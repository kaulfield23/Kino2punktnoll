//Skriv automatiskt test som verifierar att recensioner inte går att skicka utan token.

import { jest } from "@jest/globals";
import request from "supertest";
import app from "../src/app.js";
import api from "../src/api.js";
import JWT from "jsonwebtoken";

test("Return 401 status if token is wrong", async () => {
  const testing = await request(app)
    .post("/api/movies/1/reviews")
    .set("Authorization", "bearer :hello")
    .expect(401);
});

test.only("Return 401 status if there is no authorization with token", async () => {
  const testing = await request(app).post("/api/movies/1/reviews").expect(400);
});

test("Post data when token is right", async () => {
  const mockPostData = jest.spyOn(api, "postData");

  mockPostData.mockImplementation(() => Promise.resolve("hello"));
  const token = JWT.sign(
    {
      username: "hollow knight",
    },
    "thisisapassword"
  );

  const testing = await request(app)
    .post("/api/movies/1/reviews")
    .set("Authorization", "bearer " + token)
    .expect(200);

  expect(mockPostData).toBeCalledWith();
});
