const day = document.getElementById("day");
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
        break
     case 3: 
    daysOfWeek = "Wednesday";
        break
      case 4: 
    daysOfWeek = "Thursday";
        break
      case 5:
        daysOfWeek =  "Friday";
        break
       case 6: 
       daysOfWeek = "Saturday";
}


day.innerHTML = "Current Day of the Week: " + daysOfWeek;

const redElement = document.getElementById("red"); 
const currentUTCDate = new Date();

const hours = currentUTCDate.getUTCHours();
const minutes = currentUTCDate.getUTCMinutes();
const seconds = currentUTCDate.getUTCSeconds();
const milliseconds = currentUTCDate.getUTCMilliseconds();


const currentUTCTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;

red.innerHTML = "Current UTC Time: " + currentUTCTime;






