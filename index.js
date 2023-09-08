const redElement = document.getElementById("red");
const currentUTCDate = new Date();
const adjustedTime = 1;

function updateUTCTime() {
  const hours = currentUTCDate.getUTCHours() + adjustedTime;
  const minutes = currentUTCDate.getUTCMinutes();
  const seconds = currentUTCDate.getUTCSeconds();
  const milliseconds = currentUTCDate.getUTCMilliseconds();

  if (seconds < 10) {
    
    var formattedSeconds = "0" + seconds;
  } else {
    
    var formattedSeconds = seconds;
  }

 
  const currentUTCTime = `${hours}:${minutes}:${formattedSeconds}.${milliseconds}`;

  redElement.innerHTML = "Current UTC Time: " + currentUTCTime;
}

updateUTCTime();

