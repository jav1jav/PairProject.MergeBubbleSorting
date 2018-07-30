function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      array = swap(array[i], array[i + 1], array);
    }
  }
  return array;
}

function swap(index1, index2, array) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

function compare(item1, item2) {
  //return item1 < item2 ?  : swap(item1, item2);
}

// test comment
