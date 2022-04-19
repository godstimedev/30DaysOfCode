function checkPalindrome(arr) {
  let y = [];
  arr.forEach((str) => {
    let len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1]) {
        return y.push(false);
      }
    return y.push(true);
  });
  return y;
}

console.log(
  checkPalindrome(["racecar", "abcd", "bab", "kala", "madam", "carac"])
);
console.log(checkPalindrome(["bad", "good", "evil"]));
