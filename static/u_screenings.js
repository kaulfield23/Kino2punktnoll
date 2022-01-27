

// window.alert('no no hey ho');




{/* <div class = boxForScreenings>
<h1>Upcoming movies: </h1>
<ul class="listOfScreenings"></ul> */}

// const upcomingS = document.getElementsByClassName("listOfScreenings");



async function upcomingScreenings() {
const response = await fetch('/api/screenings');
const payload = await response.json();

payload.data.forEach(obj => {

const titleOnMovie = document.createElement('h4');
titleOnMovie.innerText = obj.title;

const timeForScreening = document.createElement('span');
timeForScreening.innerText = obj.time;

const screenRoom = document.createElement('p');
screenRoom.innerText = `Sal: ${obj.room}`;

const li = document.createElement('li');
li.append(titleOnMovie);
li.append(timeForScreening);
li.append(screenRoom);

document.querySelector('#listOfScreenings').append(li);

})

// console.log(payload);

}

upcomingScreenings();