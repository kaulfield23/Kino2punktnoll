import api from "./api.js";

export const getReviews = async (req) => {
  const reviewData = await api.loadReviewsData(req.params.movieId);
  const reviews = reviewData
    /* .filter((word) => word.attributes.verified == true) */
    .map((review) => {
      return {
        id: review.id,
        comment: review.attributes.comment,
        rating: review.attributes.rating,
        user: review.attributes.author,
        verfied: review.attributes.verified,
      };
    });
  return { reviews, req };
};

export const paginate = (data) => {
  const page = data.req.query.page;
  const pageSize = data.req.query.pageSize;
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  const pagData = data.reviews.slice(startIndex, endIndex);
  const results = {
    reviews: [...pagData],
    meta: {
      pagination: {
        page: page,
        pageSize: pageSize,
        pageCount: Math.ceil(data.reviews.length / pageSize),
        total: data.reviews.length,
      },
    },
  };
  return results;
};
