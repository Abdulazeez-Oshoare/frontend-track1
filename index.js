const redElement = document.getElementById("red");

setInterval(() => {
  const currentUTCDate = new Date();
  const hours = currentUTCDate.getUTCHours() + 1;
  const minutes = currentUTCDate.getUTCMinutes();
  const seconds = currentUTCDate.getUTCSeconds();
  const milliseconds = currentUTCDate.getUTCMilliseconds();

 if (hours >= 24) {
    hours -= 24;
  }
 

  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  const formattedMilliseconds =  milliseconds < 100 ? "0" + milliseconds : milliseconds;

  redElement.innerHTML = "Current UTC time: " + formattedHours + ":" + formattedMinutes + ":" + formattedSeconds + "." + formattedMilliseconds;
}, 1000);



const dayElement = document.getElementById("day");


const wess = document.getElementById("wess");
const d = new Date();
let daysOfWeek = d.getDay();

switch (daysOfWeek) {
    case 0: 
        daysOfWeek = "Sunday";
        break;
    case 1: 
        daysOfWeek = "Monday";
        break;
    case 2: 
        daysOfWeek = "Tuesday";
        break;
    case 3: 
        daysOfWeek = "Wednesday";
        break;
    case 4: 
        daysOfWeek = "Thursday";
        break;
    case 5:
        daysOfWeek = "Friday";
        break;
    case 6: 
        daysOfWeek = "Saturday";
}

wess.innerHTML = "Current Day of the Week: " + daysOfWeek;


