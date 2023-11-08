// let const 宣告變數
// 是依據有無新地址
// 不要以為const不能修改 就不能用const const這是可以的" 只要是不要重新賦予新的記憶體地址就不算修改"

const person = {
  name: "eddie",
};
person.name = "amy";
