// 初始的时候amount = 0，有一种方法
// 后续dp[j] = dp[j]+dp[j-coins[i]] 含义：
// 原来的dp[j] 表示不用到当前的元素，可以有多少种方案可以组成满足amount的值
// dp[j-coins[i]]表示如果用到当前的元素，比如amount = 5 coins[i] = 2 ，那么用了当前元素以后还差3来组成amount
// 那么就看之前的元素有几种方式能组合成3，然后把这几种方式都加上2，比如之前两种方式组合成3，那么这两种方式都加上2也可以组成amount
// 总的来说就是用当前元素和不用当前元素的组合方式相加
var change = function (amount, coins) {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]]
    }
  }
  console.log(dp)
};
const amount = 5, coins = [1, 2, 5];
const result = change(amount, coins);
console.log(result)