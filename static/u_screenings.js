
// window.alert('no no hey ho');

{/* <div class = boxForScreenings>
<h1>Upcoming movies: </h1>
<ul id="listOfScreenings"></ul> */}

async function upcomingScreenings() {
const response = await fetch('/api/screenings');
const payload = await response.json();

payload.data.forEach(obj => {

const titleOnMovie = document.createElement('h4');
titleOnMovie.innerText = obj.title;

const timeForScreening = document.createElement('span');
// timeForScreening.innerText = obj.time;
let times = obj.time;
let q = times.substring(0, 16);
var d = new Date(times);

timeForScreening.innerText = d.toISOString().split('T')[0] + " "+ d.toISOString().split('T')[1].split(':')[0] + ":"+ d.toISOString().split('T')[1].split(':')[1];//d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay() + " " +d.getHours() + ":" + d.getMinutes();

const screenRoom = document.createElement('p');
screenRoom.innerText = `Sal: ${obj.room}`;

const li = document.createElement('li');
li.append(titleOnMovie);
li.append(timeForScreening);
li.append(screenRoom);

document.querySelector('#listOfScreenings').append(li);

})

}
upcomingScreenings();

let ThisVisit = new Date();
console.log(Date());
//new date =Thu Jan 27 2022 15:58:49 GMT+0100
//api:ets"2022-01-24T12:00:00.000Z",
//peudokod
// if(timeForScreening == ThisVisit && titleOnMovie == movie){

   
// }

// upcomingScreenings();
// console.log(payload)