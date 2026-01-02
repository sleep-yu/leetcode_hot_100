var maxProfit = function (prices, fee) {
  const dp = Array.from({ length: prices.length }, () => [])
  dp[0][0] = -prices[0]; // 买入当前股票
  dp[0][1] = 0; // 不买
  // dp表示买了或者卖了以后当前手头上的最大现金
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][1] - prices[i], dp[i - 1][0]); // 持有股票，当前买入以后的最大现金为前一天结余的现金 - 当前买股票花费的现金，或者之前买入现金后持有的最大金额
    dp[i][1] = Math.max(dp[i - 1][0] + prices[i] - fee, dp[i - 1][1]); // 不持有股票，还没买过=0，或者已经卖掉股票了，可以是之前已经卖掉的，或者是当前点卖出，取最大的值
  }
  return dp[dp.length - 1][1]
};
const prices = [1, 3, 2, 8, 4, 9], fee = 2;
const result = maxProfit(prices, fee);
console.log(result)