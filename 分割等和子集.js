// 回溯解法
var canPartition = function (nums) {
  const total = nums.reduce((total, cur) => {
    return total + cur;
  }, 0)
  const half = total / 2;
  if (!Number.isInteger(half)) return false;
  const trackback = (nums, total, curIndex, target) => {
    if (total === target) {
      // 获取到目标值
      return true;
    }
    if (total > target || curIndex === nums.length) {
      return false;
    }
    // 不取当前值
    const res1 = trackback(nums, total, curIndex + 1, target);
    // 取当前值
    const res2 = trackback(nums, total + nums[curIndex], curIndex + 1, target);
    return res1 || res2;
  }
  return trackback(nums, 0, 0, half)
};

// 利用0-1背包来解决-每个元素只用一次
const packageCanPartition = function (nums) {
  const total = nums.reduce((total, cur) => total + cur, 0);
  const half = total / 2;
  if (!Number.isInteger(half)) return false;
  const dp = new Array(half + 1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    for (let j = half; j > 0; j--) {
      if (j >= nums[i]) {
        dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
      }
    }
    if (dp[half] === half) return true
  }
  return false
}

const nums = [1, 1, 4, 2, 2];
const result = packageCanPartition(nums);
console.log(result)