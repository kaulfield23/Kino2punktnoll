import express from "express";
import { getAverageRating } from "../src/getRating.js";
import { paginate, getReviews } from "../src/reviews.js";

const router = express.Router();

router.get("/:movieId/rating", async (req, res) => {
  res.json(await getAverageRating(req.params.movieId));
});

router.get("/:movieId/reviews", async (req, res) => {
  req.query.pageSize > 0 && req.query.page > 0
    ? res.json(paginate(await getReviews(req.params.movieId), req))
    : res.json(await getReviews(req.params.movieId));
});

export default router;
