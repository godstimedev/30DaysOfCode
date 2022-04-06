const number = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      document.write("FizzBuzz " + " ");
      console.log("FizzBuzz");
      continue;
    }
    if (i % 3 == 0) {
      document.write("Fizz" + " ");
      console.log("Fizz");
      continue;
    }
    if (i % 5 == 0) {
      document.write("Buzz" + " ");
      console.log("Buzz");
      continue;
    }
    document.write(i + " ");
    console.log(i);
    continue;
  }
  return "";
};

let n = 15;

document.write("<p>Input => 15</p>");
document.write(`<span>Output => </span>`);
document.write(`<span>${number(n)} </span>`);
