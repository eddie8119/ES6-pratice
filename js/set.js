// 类似于数组 值都是唯一
const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
console.log(s);

// 去除数组的重复成员
[...new Set(['a',2,2])]

// 向 Set 加入值时认为NaN等于自身
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set // Set {NaN}

// 两个对象总是不相等 視為2個值
let set = new Set();
set add({})
set.size
set add({})
set.size



// 2大類方法: 

// 操作方法:
add(value) //返回set本身
delete(value) //返回布林值
has(value) //返回布林值
clear() //無法回值

// 判斷鍵的用法差異(當參考)
if(obj[key]) // 對象
if (set.has(someThing)) // 對象

// Array.from() 将 Set 结构转为数组 跟扩展运算符一樣
let a = new Set([1, 2, 3]);
console.log([...a]);
console.log(Array.from(a));

// (可以做為去除數組重複的技巧)
const items = new Set([1, 2, 3, 4, 5]);
console.log(items)
const array = Array.from(items);
console.log(array)


// 遍歷方法:
// 特別的觀點: Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。
// (1)Set 结构没有键名，只有键值  keys()，values()結果都一樣

let set = new Set(['red', 'green', 'blue']);
for (let item of set.values()) {
  console.log(item);
}

// (2)forEach()
let set = new Set([1, 2, 3]);
set.forEach((value, key) => console.log(value + key))

// （3）扩展运算符
// 並與map和filter方法混用
let set = new Set([1, 2, 3]);
let c = new Set([...set].map( x => x+1)) ;
console.log(c);


let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

let union = new Set([...a,...b])
let intersect = new Set([...a].filter(x => b.has(x))) 
let difference = new Set([...a].filter(x => !b.has(x)))

