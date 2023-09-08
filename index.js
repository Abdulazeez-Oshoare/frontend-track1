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

 
  const formattedMilliseconds = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

  const currentUTCTime = `${hours}:${minutes}:${formattedSeconds}.${formattedMilliseconds}`;

  redElement.innerHTML = "Current UTC Time: " + currentUTCTime;
}


