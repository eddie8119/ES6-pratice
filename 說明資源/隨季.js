nums = [3, 2, 3];
let ht = {};
let count = 0;
for (let num of nums) {
  ht[num] = ht[num] + 1 || 1;
}

console.log(ht);

// for (let value of ht) {
//   console.log(value);
// }

//for...in 用於遍歷可迭代對象（如數組、字符串、Map、Set 等 象不是可迭代的。
//for...of 適用於對象和數組，但主要用於對象

// 在迭代物件屬性時，使用 for...in；在迭代陣列時，使用 for...of。
// for...in 輸出的是屬性名稱(key)，for...of 輸出的是值(value)
// for...of 是 ES6 的新語法。修復了ES5 for…in 的不足
// for...of 不能迭代物件，需要透過和 Object.keys() 搭配使用
