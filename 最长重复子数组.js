var findLength = function (nums1, nums2) {
  const dp = Array.from({ length: nums1.length + 1 }, () => Array.from({ length: nums2.length + 1 }, () => 0));
  let result = 0;
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        result = Math.max(result, dp[i][j])
      }
    }
  }
  return result;
};
const nums1 = [1, 1, 0, 0, 1], nums2 = [1, 1, 0, 0, 0];
const result = findLength(nums1, nums2);
console.log(result)