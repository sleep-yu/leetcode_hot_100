// var rob = function (nums) {
//   if (nums.length === 1) return nums[0]
//   // 取首元素不取尾元素
//   const result1 = util(nums.slice(0, nums.length - 1))
//   // 不取首元素取尾元素
//   const result2 = util(nums.slice(1, nums.length))
//   return Math.max(result1, result2)
// }

// var util = function (nums) {
//   if (nums.length === 1) return nums[0];
//   const dp = [nums[0]]
//   dp[1] = Math.max(nums[0], nums[1])
//   for (let i = 2; i < nums.length; i++) {
//     dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
//   }
//   return dp[dp.length - 1]
// }
// const nums = [0];
// const result = rob(nums);
// console.log(result)


class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);

// 中序遍历
function track(root) {
  let result = [];
  const deep = (node) => {
    if (node === null) return;
    result.push(node.val);
    deep(node.left);
    deep(node.right);
  }
  deep(root)
  return result;
}
console.log(track(tree))