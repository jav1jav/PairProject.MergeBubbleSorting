function split (wholeArray) {
  const midpoint = Math.ceil(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, midpoint);
  const secondHalf = wholeArray.slice(midpoint, wholeArray.length);
  return [firstHalf, secondHalf];
}

function merge (array1, array2) {
  let retArr = [];
  let index1 = 0;
  let index2 = 0;
  while (index1 < array1.length && index2 < array2.length) {
    if (array1[index1] < array2[index2]) {
      retArr.push(array1[index1]);
      index1++;
    } else {
      retArr.push(array2[index2]);
      index2++;
    }
  }
  if (index1 < array1.length) {
    retArr = retArr.concat(array1.slice(index1));
  } else {
    retArr = retArr.concat(array2.slice(index2));
  }
  return retArr;
}

function mergeSort (array) {
  //get an array, split it in two
  //do that again ...
  //until we have single element arrays
  //merge the single element arrays into 2 element arrays
  //merge the 2-element arrays into 4 element arrays


}
