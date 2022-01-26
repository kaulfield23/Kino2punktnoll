import express from "express";
import api from "../src/api.js";

const router = express.Router();

router.get("/", async(req, res) => {
    const reviews = await api.fetchReviews();
    console.log(reviews)
    res.json({
        data: reviews.map(obj => {
            return {
                id: obj.id,
                comment: obj.attributes.comment,
                rating: obj.attributes.rating
            }
        })
    })
});

// router.get("/:movieId", async (req, res) => {
//   const movie = await api.fetchChosenMovie(req.params.movieId);
//   if (movie) {
//     res.render("./partials/movie", { movie });
//   } else {
//     res.status(404).render("./partials/404");
//   }
// });

export default router;