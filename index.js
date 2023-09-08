const redElement = document.getElementById("red");
const currentUTCDate = new Date();
const adjustedTime = 1;

function updateUTCTime() {
  const hours = currentUTCDate.getUTCHours() + adjustedTime;
  const minutes = currentUTCDate.getUTCMinutes();
  const seconds = currentUTCDate.getUTCSeconds();
  const milliseconds = currentUTCDate.getUTCMilliseconds();

  // Format seconds and milliseconds with leading zeros
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  const formattedMilliseconds = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

  const currentUTCTime = `${hours}:${minutes}:${formattedSeconds}.${formattedMilliseconds}`;

  redElement.innerHTML = "Current UTC Time: " + currentUTCTime;
}

// Update the time every 100 milliseconds (adjust as needed)
setInterval(updateUTCTime, 100);
