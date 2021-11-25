//Optimize the given statements having lot of logical checks to use a compact and cleaner logic

// Example1
/* browser === 'chrome' ||
  browser === 'firefox' ||
  browser === 'IE' ||
  browser === 'safari'; */

browser = 'chrome';
const browserList = ['chrome', 'firefox', 'IE', 'safari'];
console.log(browserList.includes(browser));

// Example2
/* browser !== 'chrome' &&
  browser !== 'firefox' &&
  browser !== 'IE' &&
  browser !== 'safari'; */

console.log(!browserList.includes(browser));
