function split(wholeArray) {
  const midpoint = Math.ceil(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, midpoint);
  const secondHalf = wholeArray.slice(midpoint, wholeArray.length);
  return [firstHalf, secondHalf];
}

function merge(array1, array2) {
  const retArr = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < array1.length && index2 < index2.length) {
    if (array1[index1] < array2[index2]) {
      retArr.push(array1[index1]);
      index1++;
    } else {
      retArr.push(array2[index2]);
      index2++;
    }
  }
  return retArr;
}

[1, 3, 4] [2, 5, 6]
         ^
              ^
[1, 2, 3, 4]

[2, 5, 6] [1, 3, 4]
                   ^
    ^
[1, 2, 3, 4]




function swap(index1, index2, array) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

function mergeSort(array) {
  /* your code here */
  //get an array, split it in two
  //do that again ...
  //until we have single element arrays
  //merge the single element arrays into 2 element arrays
  //merge the 2-element arrays into 4 element arrays

  let a = [[8], [3], [4], [1]];
  let b = [[3, 8], [1, 4]];
}
