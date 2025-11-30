// 0-1背包
// 本题和分割等和子集相似的，这里是分成两部分差不多的石头
// 然后让其中的一部分取到该范围内的最大可放石头重量，然后计算两边的差值
var lastStoneWeightII = function (stones) {
  const total = stones.reduce((item, cur) => cur + item, 0);
  const half = parseInt(total / 2);
  const dp = new Array(half + 1).fill(0);
  for (let i = 0; i < stones.length; i++) {
    for (let j = half; j > 0; j--) {
      if (j >= stones[i]) {
        dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
      }
    }
  }
  const left = dp[dp.length - 1];
  const right = total - left;
  return Math.abs(left - right)
};
const stones = [31, 26, 33, 21, 40]
const result = lastStoneWeightII(stones);
console.log(result)

