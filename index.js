const red = document.getElementById("red");

setInterval(() => {
  
  const currentUTCDate = new Date();
  const hours = currentUTCDate.getUTCHours() + 1;
  const minutes = currentUTCDate.getUTCMinutes();
  const seconds = currentUTCDate.getUTCSeconds();
  const milliseconds = currentUTCDate.getUTCMilliseconds();

  const format = hours < 12 ? "AM" : "PM";

  
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12; 
  }
  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;


  red.innerHTML = "Current UTC time: " + formattedHours + ":" + formattedMinutes + ":" + formattedSeconds + "." + milliseconds +" " + format ;
}, 1000);






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


