import api from './api.js'

export async function getAverageRating(movieId) {
    let result = null;
    const movies = await api.fetchAllMovies(movieId); //imdb id includes here
    const reviews = await api.fetchReviews(movieId); // review doesnt have imdb id

    let selectedMovie = movies.filter(obj => obj.id == movieId)
    const imdbRating = await api.fetchIMDBRate(selectedMovie[0].attributes.imdbId)

    if (reviews.length >= 5) {
        reviews.map(obj => {
            result += obj.attributes.rating;
        })
        return parseFloat((result / reviews.length).toFixed(1))
    } else {
        return parseFloat((imdbRating.rating / 2).toFixed(1));
    }
}
//각 영화의 세부 정보 페이지에는 아래 논리에 따라 계산된 영화 등급이 표시되어야 합니다.
//등급은 페이지가 로드된 후 브라우저의 가져오기()를 사용하여 로드되어야 합니다.
//Detaljsidorna för respektive film ska visa den filmens betyg, som räknas ut enligt nedanstående logik. Betyget ska laddas in EFTER att sidan har laddats, med hjälp av webbläsarens fetch().

//영화에 대한 리뷰가 5개 이상인 경우 해당 리뷰의 평점 평균을 계산합니다.
// 테스트 끝/Om det finns 5 recensioner eller fler för en film, räkna ut ett genomsnitt av betygen från dessa recensioner

//영화에 대한 리뷰가 5개 미만인 경우, IMDB API에서 평균 평점을 다운로드.
//Om det finns färre än 5 recensioner för en film, hämta istället genomsnittsbetyget från IMDB:s API

//Ovanstående logik ska testas med hjälp av ett enhetstest och mockade datakällor