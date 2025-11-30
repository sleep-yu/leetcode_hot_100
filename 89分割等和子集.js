var canPartition = function (nums) {
  const total = nums.reduce((item, cur) => item + cur, 0);
  const half = total / 2;
  if (!Number.isInteger(half)) {
    return false
  }
  const dp = new Array(half + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = half; j > 0; j--) {
      if (j >= nums[i]) {
        // 可放入当前的物品
        dp[j] = Math.max(dp[j], nums[i] + dp[j - nums[i]]);
      }
    }
    if (dp[half] === half) return true;
  }
  return false;
};

const nums = [1, 5, 11, 5];
const result = canPartition(nums);
console.log(result)