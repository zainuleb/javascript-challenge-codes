//Write a code to show the working of try...catch...finally

/* The try statement consists of a try-block, which contains one or more statements. 
At least one catch-block, or a finally-block, must be present
The exceptions and errors from try block are caught in catch block */

try {
  // Below statement will throw an Error
  callAPI();
} catch (error) {
  // Create a new error and throw
  throw new Error(error); // ReferenceError: callAPI is not defined
} finally {
  console.log('I will execute no matter what happened in try or catch');
}
