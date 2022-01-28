import express from "express";
import api from "../src/api.js";

const router = express.Router();

router.get("/:movieId/reviews", async (req, res) => {
  const reviewData = await api.loadReviewsData(req.params.movieId);
  const page = req.query.page;
  const pageSize = req.query.pageSize;
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  /* const checkVerfied = reviewData.filter(
      (word) => word.attributes.verified == true
    ); */

  const reviews = reviewData
    /* .filter((word) => word.attributes.verified == true) */
    .slice(startIndex, endIndex)
    .map((review) => {
      return {
        id: review.id,
        comment: review.attributes.comment,
        rating: review.attributes.rating,
        user: review.attributes.author,
        verfied: review.attributes.verified,
      };
    });

  const results = {
    reviews: [...reviews],
    meta: {
      pagenation: {
        page: req.query.page,
        pageSize: pageSize,
        pageCount: Math.ceil(reviewData.length / pageSize),
        total: reviewData.length,
      },
    },
  };
  res.json(results);
});

export default router;
