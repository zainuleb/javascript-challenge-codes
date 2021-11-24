//Write the polyfill for Number.isNaN

//A polyfill is a piece of code used to provide modern functionality on older browsers that do not natively support it
//NaN is the only value which is not equal to itself and hence comparision operator cannot be used directly to check if a value is NaN

Number.isNaN =
  Number.isNaN ||
  function isNaN(input) {
    return typeof input === 'number' && input !== input;
  };
