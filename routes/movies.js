import express from "express";
import api from "../src/api.js";

const router = express.Router();

router.get("/", async(req, res) => {
    const movies = await api.fetchAllMovies();
    res.render("./partials/allmovies", { movies });
});

router.get("/:movieId", async(req, res) => {
    const movie = await api.fetchChosenMovie(req.params.movieId);
    if (movie) {
        res.render("./partials/movie", { movie });
    } else {
        res.status(404).render("./partials/404");
    }
});

export default router;