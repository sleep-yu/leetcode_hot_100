/**
 * 动态规划0-1背包实现
 * 分成两个集合 加法集合：left 减法集合：right
 * left + right = sum
 * left - right = target
 * 可计算出left = (sum + target) / 2
 */
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((item, cur) => item + cur, 0);
  const left = (sum + target) / 2;
  if (!Number.isInteger(left)) return 0;
  const dp = new Array(left + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = left; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]]
    }
  }
  return dp[left]
};
// 回溯实现
const backtrack = (nums, target) => {
  total = 0;
  const deep = (nums, target, curTotal, curIndex) => {
    if (curIndex === nums.length) {
      if (curTotal === target) {
        total++
      }
      return;
    };
    deep(nums, target, curTotal + nums[curIndex], curIndex + 1);
    deep(nums, target, curTotal - nums[curIndex], curIndex + 1)
  }
  deep(nums, target, 0, 0);
  return total;
}
const nums = [0, 0, 0, 0, 0, 0, 0, 0], target = 0;
const result = findTargetSumWays(nums, target);
console.log(result)