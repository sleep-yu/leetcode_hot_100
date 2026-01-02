var maxProfit = function (prices) {
  const dp = Array.from({ length: prices.length }, () => []);
  dp[0][0] = -prices[0];
  dp[0][1] = 0;
  dp[0][2] = -prices[0];
  dp[0][3] = 0;
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]); // 第一次持有
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]); // 第一次不持有
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] - prices[i]); // 第二次持有
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] + prices[i]); // 第三次持有
  }
  return dp[dp.length - 1][3]
};

const prices = [3, 3, 5, 0, 0, 3, 1, 4]
const result = maxProfit(prices);
console.log(result);