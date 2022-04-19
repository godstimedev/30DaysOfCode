let arr = [4, 10, 6];
document.write(`<span>${arr} </span>`);
document.write(`<span> => </span>`);

const array = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let y = [];
    for (let j = 1; j <= arr[i]; j++) {
      if (j % 3 == 0 && j % 5 == 0) {
        y.push("FizzBuzz");
        continue;
      }
      if (j % 3 == 0) {
        y.push("Fizz");
        continue;
      }
      if (j % 5 == 0) {
        y.push("Buzz");
        continue;
      }
      y.push(j);
    }
    document.write(`[<span>${y}</span>]  `);
  }

  return "";
};

array(arr);
