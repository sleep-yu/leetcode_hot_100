// 求排列则要先背包，后物品，完全背包，物品可以重复使用，所以从前往后遍历
var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1
  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i >= nums[j]) {
        dp[i] += dp[i - nums[j]]
      }
    }
  }
  return dp[dp.length - 1]
};
const nums = [1, 2, 3], target = 4;
const result = combinationSum4(nums, target);
console.log(result)