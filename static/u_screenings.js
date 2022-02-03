
async function upcomingScreenings(sId) {
    const res = await fetch(`/api/screenings/movies/${sId}`);
    const payload = await res.json();
    payload.data.forEach(obj => {

        const localTime = `${obj.time}`;

        const getLocalTime = new Date(localTime).
            toLocaleString();

        const timeForScreening = document.createElement('h6');
        timeForScreening.innerText = "Datum & Tid: " + getLocalTime.slice(0, -3);
        const screenRoom = document.createElement('p');
        screenRoom.innerText = `Sal: ${obj.room}`;

        const li = document.createElement('li');
        li.append(timeForScreening);
        li.append(screenRoom);
        document.querySelector('#listOfScreenings').append(li);

    });
}

upcomingScreenings(document.location.pathname.split("/movies/")[1]);
