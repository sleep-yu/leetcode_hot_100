const arr = [{}, {}, '', '', 233, 233, '233', 'abc', undefined, null, null, NaN, NaN, 123, [2], [2], [2, 3]]
const newArr = [...new Set(arr)];

// 实现一个mySet类
Array.prototype.mySet = function () {
  return [...new Set(this)]
}

const newArr1 = arr.mySet();
console.log(arr);