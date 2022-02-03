
//2 arguments; for movieId and fetchingScreeningsByMovieId  
export async function filterOneScreening(movieId, fetchingScreeningsByMovieId) {

    const oneScreening = await fetchingScreeningsByMovieId(movieId);

    let thisVisit = new Date();
    const jsonDate = thisVisit.toJSON();
    if (oneScreening) {
        return {
            data: oneScreening
                .filter(data => jsonDate < data.attributes.start_time)
                .map(data => {
                    return {
                        id: data.id,
                        time: data.attributes.start_time,
                        room: data.attributes.room,
                    }
                })
        }
    }
}




