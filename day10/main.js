function merge(arr1, arr2) {
  const arr = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      arr.push(arr1.shift());
    } else {
      arr.push(arr2.shift());
    }
  }
  return [...arr, ...arr1, ...arr2];
}

console.log(merge([1, 4, 7, 8], [2, 3, 4]));
console.log(merge([], [2, 4, 9]));
console.log(merge([1, 2, 7, 8], [2, 5, 9, 14]));
