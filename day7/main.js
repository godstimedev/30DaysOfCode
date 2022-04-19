const unsortArr = (arr) => {
  return arr.sort((a, b) => a - b);
};

console.log(unsortArr([1, 9, 4, 5, 3, 0]));
console.log(unsortArr([2, 5, 9, 6, 1, 53, 45]));
console.log(unsortArr([4, 9, -3, 5, 0, -14, 10]));
