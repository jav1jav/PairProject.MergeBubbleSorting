var count =  0;

function bubbleSort(array) {
  //
  for (let j = array.length; j >= 0; j--) {
    for (let i = 0; i < j ; i++) {
      if (array[i] > array[i + 1]) {
        array = swap(i, i + 1, array);
      }
    }
  }
  console.log(count);
  return array;

}


function swap(index1, index2, array) {
  count++;
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

function compare(item1, item2) {
  //return item1 < item2 ?  : swap(item1, item2);
}

// test comment
