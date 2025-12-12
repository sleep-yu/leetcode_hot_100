var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j >= coins[i]) {
        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
      }
    }
  }
  return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
};
const coins = [1], amount = 0
const result = coinChange(coins, amount);
console.log(result)