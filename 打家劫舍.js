var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  const dp = [nums[0]]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[dp.length - 1]
}
const nums = [1, 2, 3, 1];
const result = rob(nums);
console.log(result)