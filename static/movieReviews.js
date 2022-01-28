import loadMovieReviews from "./fetch.js";

const populateReviews = async (data) => {
  const container = document.querySelector(".reviews");

  const user = document.createElement("h3");
  user.innerText = `User: ${data.user}`;
  container.append(user);

  const rating = document.createElement("p");
  rating.innerText = `Rating: ${data.rating}`;
  container.append(rating);

  const comment = document.createElement("p");
  comment.innerText = `Comment: ${data.comment}`;
  container.append(comment);
};

const createPageButtons = (data) => {
  const container = document.querySelector(".reviews");

  const nextBtn = document.createElement("button");
  nextBtn.classList.add("next-btn");
  nextBtn.innerText = "Next";
  nextBtn.addEventListener("click", () => {
    renderReviews(window.location.href.slice(-1), parseInt(data.page) + 1);
  });

  const prevBtn = document.createElement("button");
  prevBtn.classList.add("prev-btn");
  prevBtn.innerText = "Previous";
  prevBtn.addEventListener("click", () => {
    renderReviews(window.location.href.slice(-1), parseInt(data.page) - 1);
  });

  const pageCounter = document.createElement("p");
  pageCounter.classList.add("pageCounter");
  pageCounter.innerText = `Page: ${parseInt(data.page)} / ${parseInt(
    data.pageCount
  )}`;

  container.append(pageCounter);
  container.append(nextBtn);
  container.append(prevBtn);
};

const renderReviews = async (id, page = 1) => {
  const reviews = await loadMovieReviews(id, page);
  document.querySelector(".reviews").innerHTML = "";
  reviews.reviews.forEach((element) => {
    populateReviews(element);
  });
  createPageButtons(reviews.meta.pagenation);
};

renderReviews(window.location.href.slice(-1));
