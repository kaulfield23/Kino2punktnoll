
async function upcomingScreenings() {
const response = await fetch('/api/screenings');
const payload = await response.json();

payload.data.forEach(obj => {

const titleOnMovie = document.createElement('h4');;
const screenRoom = document.createElement('p');
const timeForScreening = document.createElement('span');

 const pin = document.getElementsByClassName("card-header")[0].innerText;

//  console.log("pin: "+pin + " obj: "+obj.movies.title);//test
if (pin == obj.movies.title){
    titleOnMovie.innerText = obj.movies.title;
    screenRoom.innerText = `Sal: ${obj.room}`;
    getRightTime();
} else {
    titleOnMovie.innerText = "";
    screenRoom.innerText = "";
    timeForScreening.innerText = "";
}

function getRightTime() {
let times = obj.time;
let q = times.substring(0, 16);
var d = new Date(times);

let thisVisit = new Date();
const jsonDate = thisVisit.toJSON();
console.log(jsonDate);

if(jsonDate < obj.time){
    return timeForScreening.innerText = d.toISOString().split('T')[0] + " "+ d.toISOString().split('T')[1].split(':')[0] + ":"+ d.toISOString().split('T')[1].split(':')[1];//d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay() + " " +d.getHours() + ":" + d.getMinutes(); 
}else{
    titleOnMovie.innerText = "";
    screenRoom.innerText = "";
    timeForScreening.innerText = "";
}
}

const li = document.createElement('li');
li.append(titleOnMovie);
li.append(timeForScreening);
li.append(screenRoom);

document.querySelector('#listOfScreenings').append(li);

})

}
upcomingScreenings();



