function split(wholeArray) {
  // [0, 1, 2, 3]
  let midpoint = Math.ceil(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, midpoint);
  let secondHalf = wholeArray.slice(midpoint, wholeArray.length);
  return [firstHalf, secondHalf];
}

function merge(array1, array2) {
  return [...array1, ...array2];
}

function mergeSort(array) {
  /* your code here */
}
