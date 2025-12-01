// dp[i][j]表示当前能装最多i个0 j个1
// 当遍历到第k个物品的时候，我们要知道dp[i][j]能装最多个物流，就看减去当前k个物品的0，1个数，之前能装多少个物品，然后再加上当前物品
// 0-1背包都是先遍历物品，再遍历背包，背包要倒序遍历，因为每个物品只能取一次
var findMaxForm = function (strs, m, n) {
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let k = 0; k < strs.length; k++) {
    let x = 0, y = 0;
    // 记录0和1的个数
    for (let i = 0; i < strs[k].length; i++) {
      if (strs[k][i] === '0') {
        x++
      } else {
        y++
      }
    }
    for (let i = m; i >= x; i--) {
      for (let j = n; j >= y; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - x][j - y] + 1);
      }
    }
  }
  return dp[m][n];
};
const strs = ["10", "0", "1"], m = 1, n = 1
const res = findMaxForm(strs, m, n)
console.log(res)