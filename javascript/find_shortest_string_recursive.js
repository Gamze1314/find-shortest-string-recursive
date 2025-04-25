function findShortestStringRecursive(arr) {
  // type your code here
  // base case
  if (arrLength === 0) {
    return null;
  }
  if (arrLength === 1) {
    return arr[0];
  }
  // recursive case
  // store the resulting value in a variable called result
  // call function with a smaller array.
  const result = findShortestStringRecursive(arr.slice(1));

  return arr[0].length <= result.length ? arr[0] : result;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// find the shortest string in the array
// array length min is  1.
// if the array is empty return null
// if the array has only one element return that element
// if the array has more than one element
// compare the first element with the rest of the elements
// repeat the process until the shortest string is found.



// And a written explanation of your solution
//i can use recursion to find the shortest string in the array, i can repeat the process for each element if the length of the array is greater than 1.
// base case is when the array has only one element, i can return that element..
// i can repeat the process for each element in the array and compare the length of the first element with the rest of the elements.
// if the first element is shorter than the rest of the elements, i can return the first element.
// if the first element is longer than the rest of the elements, i can return the shortest element in the rest of the elements.
