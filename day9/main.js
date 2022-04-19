function printPascal(n) {
  let v = [];
  for (line = 1; line <= n; line++) {
    let y = [];
    let C = 1;
    for (i = 1; i <= line; i++) {
      y.push(C + " ");
      C = (C * (line - i)) / i;
    }
    v.push(y);
  }
  return v;
}
console.log(printPascal(1));
console.log(printPascal(3));
console.log(printPascal(4));
