function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); // Throw an error for null values
  }
  return a + b; 
}
//Alternative solution:
function foo(a, b) {
  a = a || 0; //default values
  b = b || 0;
  return a + b;
}