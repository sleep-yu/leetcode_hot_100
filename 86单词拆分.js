var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const str = s.slice(j, i);
      if (wordDict.includes(str) && dp[j]) {
        dp[i] = true;
      }
    }
  }
  return dp[dp.length - 1]
}

const s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
const result = wordBreak(s, wordDict);
console.log(result)