// Array sum

const sumOfArray = (arr) => {
  let sumOfArray = 0;

  for (let i = 0; i < arr.length; i++) {
    sumOfArray = sumOfArray + arr[i];
  }
  return sumOfArray;
};

let arr = [1, 5, 4];
let arr2 = [1, 2, -3, 5];

document.write(
  "Sum of the given arrays are " + sumOfArray(arr) + " and " + sumOfArray(arr2)
);

console.log(sumOfArray(arr));
console.log(sumOfArray(arr2));
