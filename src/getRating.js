import { fetchReviews } from "./api"
export async function getRating() {
    const review = await fetchReviews();
    console.log(review)
}