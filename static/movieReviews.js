import loadMovieReviews from "./fetch.js";

const populateReviews = async (data) => {
  const container = document.querySelector(".reviews");
  const card = document.createElement("div");
  card.setAttribute("class", "card-body");

  const user = document.createElement("h3");
  user.innerText = `${data.user}`;
  card.append(user);

  const rating = document.createElement("p");
  rating.innerText = `Rating: ${data.rating}`;
  card.append(rating);

  const comment = document.createElement("p");
  comment.innerText = `${data.comment}`;
  card.append(comment);

  container.append(card);
};

const createPageButtons = (data) => {
  const container = document.querySelector(".container");
  const reviewCtn = document.querySelector(".reviews");

  const nextBtn = document.createElement("button");
  nextBtn.setAttribute("class", "next-btn btn btn-primary m-3");
  nextBtn.innerText = "Next";
  nextBtn.addEventListener("click", () => {
    renderReviews(window.location.href.slice(-1), parseInt(data.page) + 1);
  });

  const prevBtn = document.createElement("button");
  prevBtn.setAttribute("class", "prev-btn btn btn-primary");
  prevBtn.innerText = "Previous";
  prevBtn.addEventListener("click", () => {
    renderReviews(window.location.href.slice(-1), parseInt(data.page) - 1);
  });

  const pageCounter = document.createElement("p");
  pageCounter.classList.add("pageCounter");
  pageCounter.innerText = `Page: ${parseInt(data.page)} / ${parseInt(
    data.pageCount
  )}`;

  reviewCtn.append(pageCounter);
  reviewCtn.append(prevBtn);
  reviewCtn.append(nextBtn);

  container.append(reviewCtn);
};

const renderReviews = async (id, page = 1) => {
  const reviews = await loadMovieReviews(id, page);
  document.querySelector(".reviews").innerHTML = "";
  reviews.reviews.forEach((element) => {
    populateReviews(element);
  });
  if (reviews.meta.pagination.pageCount > 1) {
    createPageButtons(reviews.meta.pagination);
  }
};

renderReviews(window.location.href.slice(-1));
