var maxProfit = function (k, prices) {
  const dp = Array.from({ length: prices.length }, () => []);
  // 初始化dp
  for (let i = 0; i < k; i++) {
    dp[0][i * 2] = -prices[0]
    dp[0][i * 2 + 1] = 0;
  }
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]); // 第一次持有
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]); // 第一次不持有
    for (let j = 1; j < k; j++) {
      dp[i][j * 2] = Math.max(dp[i - 1][j * 2], dp[i - 1][j * 2 - 1] - prices[i]); // 第j次持有
      dp[i][j * 2 + 1] = Math.max(dp[i - 1][j * 2 + 1], dp[i - 1][j * 2] + prices[i]); // 第j次不持有
    }
  }
  return dp[dp.length - 1][k * 2 - 1]
};

const k = 2, prices = [3, 2, 6, 5, 0, 3]
const result = maxProfit(k, prices);
console.log(result);