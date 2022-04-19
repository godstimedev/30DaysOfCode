const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};

console.log(twoSum([1, 9, 4, 5, 3, 0], 10));
console.log(twoSum([2, 5, 9, 6, 1, 53, 45], 47));
console.log(twoSum([4, 9, 3, 5, 0, 14, 10], 100));
