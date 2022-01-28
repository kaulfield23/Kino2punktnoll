import express from "express";
import { getAverageRating } from "../src/getRating.js";

const router = express.Router();

router.get("/:movieId/rating", async(req, res) => {
    res.json(await getAverageRating(req.params.movieId))
});


export default router;