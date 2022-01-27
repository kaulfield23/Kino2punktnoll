import express from "express";
import api from "../src/api.js";

const router = express.Router();

// router.get("/api/reviews/", async(req, res) => {

// });

router.get("/:movieId/reviews", async(req, res) => {
    const review = await api.fetchReviews(req.params.movieId)

    res.json({})
});

//각 영화의 세부 정보 페이지에는 아래 논리에 따라 계산된 영화 등급이 표시되어야 합니다.
//등급은 페이지가 로드된 후 브라우저의 가져오기()를 사용하여 로드되어야 합니다.
//Detaljsidorna för respektive film ska visa den filmens betyg, som räknas ut enligt nedanstående logik. Betyget ska laddas in EFTER att sidan har laddats, med hjälp av webbläsarens fetch().

//영화에 대한 리뷰가 5개 이상인 경우 해당 리뷰의 평점 평균을 계산합니다.
//Om det finns 5 recensioner eller fler för en film, räkna ut ett genomsnitt av betygen från dessa recensioner

//영화에 대한 리뷰가 5개 미만인 경우 대신 IMDB API에서 평균 평점을 다운로드하세요.
//Om det finns färre än 5 recensioner för en film, hämta istället genomsnittsbetyget från IMDB:s API

//위의 논리는 장치 테스트 및 모의 데이터 소스를 사용하여 테스트해야 합니다.
//Ovanstående logik ska testas med hjälp av ett enhetstest och mockade datakällor
export default router;