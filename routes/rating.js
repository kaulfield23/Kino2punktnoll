import express from "express";
import { getRating } from "../src/getRating.js";

const router = express.Router();

router.get("/:movieId/reviews", async(req, res) => {
    res.json(await getRating(req.params.movieId))
});


export default router;