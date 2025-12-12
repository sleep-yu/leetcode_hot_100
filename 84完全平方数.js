// var numSquares = function (n) {
//   const dp = new Array(n + 1).fill(Infinity);
//   dp[0] = 0;
//   for (let i = 1; i <= n; i++) {
//     for (j = 1; j * j <= n; j++) {
//       if (i >= j * j) {
//         dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
//       }
//     }
//   }
//   return dp[dp.length - 1];
// };

var numSquares = function (n) {
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i * i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j >= i * i) {
        dp[j] = Math.min(dp[j], dp[j - i * i] + 1)
      }
    }
  }
  return dp[dp.length - 1]
}

const result = numSquares(16)
console.log(result)