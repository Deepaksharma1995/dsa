// [1,3,5,7,9] [2,4,6,8]

let sortedMerge = function (arr1, arr2) {
  let i = 0;
  let j = 0;
  let merged = [];

  while (i !== arr1.length - 1 || j !== arr2.length - 1) {
    if (arr1[i] > arr2[j]) {
      merged.push(arr2[j]);
      j++;
    } else if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr1[i]);
      merged.push(arr2[j]);
      i++;
      j++;
    }
  }
  if (i < arr1.length) {
    while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
    }
  }
  if (j < arr2.length) {
    while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
    }
  }
  return merged;
};
