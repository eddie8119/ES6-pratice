let arr:number[] = [1, 2, 3];
let arr2:Array<number> = [1, 2, 3]; //內建的Array 介面


// 類型推斷 
// 自動更新 (只發生"初始值為空數組"時)
const arr = [];
arr // 推断为 any[]

arr.push(123);
arr // 推断类型为 number[]

arr.push('abc');
arr // 推断类型为 (string|number)[]