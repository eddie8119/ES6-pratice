// 用來定義一個類型的"別名"
// 不允許重名


// 區塊級作用域
type Color = 'red';

if (Math.random() < 0.5) {
  type Color = 'blue';
}