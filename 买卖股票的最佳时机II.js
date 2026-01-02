var maxProfit = function (prices) {
  let result = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      result += prices[i] - prices[i - 1]
    }
  }
  return result;
}

// 动态规划解答
// 对比买卖股票I,这里的区别就是可以多次买卖，所以计算当前买入股票的价格不能直接是-prices[i]，因为可能之前买了以后有剩余的钱，所以是dp[i-1][1] - prices[i]
var maxProfit = function (prices) {
  const dp = Array.from({ length: prices.length }, () => [])
  dp[0][0] = -prices[0]; // 买入当前股票
  dp[0][1] = 0; // 不买
  // dp表示买了或者卖了以后当前手头上的最大现金
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][1] - prices[i], dp[i - 1][0]); // 持有股票，当前买入以后的最大现金为前一天结余的现金 - 当前买股票花费的现金，或者之前买入现金后持有的最大金额
    dp[i][1] = Math.max(dp[i - 1][0] + prices[i], dp[i - 1][1]); // 不持有股票，还没买过=0，或者已经卖掉股票了，可以是之前已经卖掉的，或者是当前点卖出，取最大的值
  }
  return dp[dp.length - 1][1]
};

const prices = [7, 1, 5, 3, 6, 4]
const result = maxProfit(prices);
console.log(result)