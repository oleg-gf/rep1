'use strict';
function quickSort(arr) {
  let pivot = [];
  let less = [];
  let greater = [];
  if (arr.length < 2) {
    return arr;
  }
  pivot = arr[Math.floor(arr.length / 2)];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      greater.push(arr[i]);
    } 
    if (arr[i] < pivot) {
    less.push(arr[i]);
    }
  }
  return quickSort(less).concat(pivot, quickSort(greater));
}

quickSort([5, 3, 6, 2, 10, 5, 27, 11]);
