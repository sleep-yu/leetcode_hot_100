// 参考最大子数组和:leetcode 53
var maxProfit = function (prices) {
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    max = Math.max(prices[i] - min, max);
    console.log(max)
  }
  return max;
};

// 动态规划解
var maxProfit = function (prices) {
  const dp = Array.from({ length: prices.length }, () => [])
  dp[0][0] = -prices[0]; // 买入当前股票
  dp[0][1] = 0; // 不买
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(-prices[i], dp[i - 1][0]); // 持有股票，当前买入，或者之前买入的，取买入的价格最低的值
    dp[i][1] = Math.max(dp[i - 1][0] + prices[i], dp[i - 1][1]); // 不持有股票，还没买过=0，或者已经卖掉股票了，可以是之前已经卖掉的，或者是当前点卖出，取最大的值
  }
  return dp[dp.length - 1][1]
};

const prices = [7, 6, 4, 3, 1]
const result = maxProfit(prices);
console.log(result)