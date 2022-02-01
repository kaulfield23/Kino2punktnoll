import api from "./api.js";

export const getReviews = async (id) => {
  const reviewData = await api.fetchReviews(id);
  const reviews = reviewData.map((review) => {
    return {
      id: review.id,
      comment: review.attributes.comment,
      rating: review.attributes.rating,
      user: review.attributes.author,
      verified: review.attributes.verified,
    };
  });
  return reviews;
};

export const paginate = (data, req) => {
  const page = req.query.page;
  const pageSize = req.query.pageSize;
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const paginatedResults = data.slice(startIndex, endIndex);
  const results = {
    reviews: [...paginatedResults],
    meta: {
      pagination: {
        page: page,
        pageSize: pageSize,
        pageCount: Math.ceil(data.length / pageSize),
        total: data.length,
      },
    },
  };
  return results;
};
