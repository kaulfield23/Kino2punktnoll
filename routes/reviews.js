import express from "express";
import { paginate, getReviews } from "../src/reviews.js";

const router = express.Router();

router.get("/:movieId/reviews", async (req, res) => {
  res.json(paginate(await getReviews(req)));
});

export default router;
