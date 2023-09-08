const redElement = document.getElementById("red");
const wessElement = document.getElementById("wess");

function updateDateTime() {
    const currentUTCDate = new Date();
    const hours = currentUTCDate.getUTCHours() + 1;
    const minutes = currentUTCDate.getUTCMinutes();
    const seconds = currentUTCDate.getUTCSeconds();
    const milliseconds = currentUTCDate.getUTCMilliseconds();

    const format = hours < 12 ? "AM" : "PM";

    const formattedHours = hours % 12 || 12; 
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    const formattedMilliseconds = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    redElement.innerHTML = `Current UTC time: ${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds} ${format}`;

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[currentUTCDate.getUTCDay()];
    wessElement.innerHTML = `Current Day of the Week: ${dayOfWeek}`;
}


updateDateTime();
setInterval(updateDateTime, 1000);
