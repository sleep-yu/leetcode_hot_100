let arr = [1, 2, 3];

arr.unshift(4, 5); // [4，5，1，2，3]

// 实现一个myUnshift类似于原生unshift功能
Array.prototype.myUnshift = function () {
  // 拿到传入的参数长度
  const lens = arguments.length;
  // 从后往前依次一个个塞元素进去
  for (let i = lens - 1; i >= 0; i--) {
    this.splice(0, 0, arguments[i])
  }
}

let newArr = [1, 2, 3]
newArr.myUnshift(4, 5);
console.log(newArr)