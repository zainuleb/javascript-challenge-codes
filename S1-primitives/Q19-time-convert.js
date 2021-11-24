//Write a function which can convert the time input given in 12 hours format to 24 hours format

/* The check for 'AM' and 'PM' can be verified using endsWith String method
An extra 0 would be needed if the hours have single digit */

function convertTo24HrsFormat(timeText) {
  var timeTextLower = timeText.toLowerCase();
  let [hours, mins] = timeTextLower.split(':');

  // 12 o clock is the special case to be handled both for AM and PM
  if (timeTextLower.endsWith('am')) hours = hours == 12 ? '0' : hours;
  else if (timeTextLower.endsWith('pm'))
    hours = hours == 12 ? hours : String(+hours + 12);

  return hours.padStart(2, 0) + ':' + mins.slice(0, -2).padStart(2, 0);
}

console.log(convertTo24HrsFormat('12:10AM')); // 00:10
console.log(convertTo24HrsFormat('5:00AM')); // 05:00
console.log(convertTo24HrsFormat('12:33PM')); // 12:33
console.log(convertTo24HrsFormat('01:59PM')); // 13:59
console.log(convertTo24HrsFormat('11:8PM')); // 23:08
console.log(convertTo24HrsFormat('10:02PM')); // 22:02
