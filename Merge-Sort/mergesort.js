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
  // take each array, compare elements, push smaller,
  // increment index
  while (i < array1.length && k < array2.length) {
    if (array1[i] < array2[k]) {
      retArr.push(array1[i]);
      i++;
    } else {
      retArr.push(array2[k]);
      k++;
    }
  }
  // once exited while, concatenate remaining elements
  // which will already be sorted
  if (i < array1.length) {
    retArr = retArr.concat(array1.slice(i));
  } else {
    retArr = retArr.concat(array2.slice(k));
  }
  return retArr;
}

function mergeSort (array) {
  const splitArr = split(array);
  let sortedArr1 = splitArr[0];
  let sortedArr2 = splitArr[1];

  if (sortedArr1.length > 1) {
    sortedArr1 = mergeSort(sortedArr1);
    sortedArr2 = mergeSort(sortedArr2);
  }
  return merge(sortedArr1, sortedArr2);
}
// * Explaning mergeSort *
  //get an array, split it in two
  //do that again ... by calling mergeSort
  //until we have single element arrays
  //then as we recursively revisit the functions in the stack
  //merge the single element arrays into 2 element arrays
  //merge the 2-element arrays into 4 element arrays
  //and we're done
