function split (wholeArray) {
  const midpoint = Math.ceil(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, midpoint);
  const secondHalf = wholeArray.slice(midpoint, wholeArray.length);
  return [firstHalf, secondHalf];
}

function merge (array1, array2) {
  let retArr = [];
  let i = 0;
  let k = 0;
  while (i < array1.length && k < array2.length) {
    if (array1[i] < array2[k]) {
      retArr.push(array1[i]);
      i++;
    } else {
      retArr.push(array2[k]);
      k++;
    }
  }
  if (i < array1.length) {
    retArr = retArr.concat(array1.slice(i));
  } else {
    retArr = retArr.concat(array2.slice(k));
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
