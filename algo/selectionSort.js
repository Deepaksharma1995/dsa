function selectionSort(arr) {
  let length = arr.length;
  let smallest = 0;

  for (let i = 0; i < length; i++) {
    let j = i + 1;
    while (j < length) {
      if (arr[smallest] > arr[j]) {
        smallest = j;
      }
      j++;
    }
    let temp = arr[smallest];
    arr[smallest] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
