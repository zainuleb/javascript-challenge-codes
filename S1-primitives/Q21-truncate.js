//Write a function to truncate a string to a certain number of letters

function truncateString(str, charCount) {
  if (str.length > charCount) {
    return str.substr(0, charCount - 3) + '...';
  } else {
    return str;
  }
}

// Example
console.log(truncateString('JavaScript', 7)); // "Java..."
console.log(truncateString('JS is fun', 10)); // "JS is fun"
console.log(truncateString('JS is funny', 10)); // "JS is f..."
