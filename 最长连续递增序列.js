// 动态规划解决
var findLengthOfLCIS = function (nums) {
  const dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }
  }
  let result = 0;
  for (let i = 0; i < dp.length; i++) {
    if (dp[i] > result) {
      result = dp[i]
    }
  }
  return result;
};

var findLengthOfLCIS = function (nums) {
  let result = 1;
  let total = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      total++;
      result = Math.max(result, total)
    } else {
      total = 1;
    }
  }
  return result;
}
const nums = [1, 3, 5, 4, 7];
const result = findLengthOfLCIS(nums);
console.log(result);