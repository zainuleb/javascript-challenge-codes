//Create a function which returns a random number in the given range of values both inclusive

//Math.random function returns a floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive)

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  return rangeStart + Math.round(Math.random() * (rangeEnd - rangeStart));
}

console.log(randomNumberGeneratorInRange(10, 50));
