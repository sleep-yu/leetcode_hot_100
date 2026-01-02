var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // 递增
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
  }
  // 遍历得到最大的递增子序列数量
  let result = dp[0];
  for (let i = 1; i < dp.length; i++) {
    if (dp[i] > result) {
      result = dp[i]
    }
  }
  return result;
};
const nums = [1, 3, 6, 7, 9, 4, 10, 5, 6]
const result = lengthOfLIS(nums);
console.log(result)