//Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'
// Example
getTheGapX('XeroX'); // 4
getTheGapX('Xamarin'); // -1       (If there is only single character 'X')
getTheGapX('JavaScript'); // -1       (If there is no character 'X')
getTheGapX('F(X) !== G(X) !== F(X)'); // 18

function getTheGapX(str) {
  if (!str.includes('X')) {
    return -1;
  }

  const firstIndex = str.indexOf('X');
  const lastIndex = str.lastIndexOf('X');
  return firstIndex === lastIndex ? -1 : lastIndex - firstIndex;
}
