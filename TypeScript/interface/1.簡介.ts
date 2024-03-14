// JavaScript 中不存在介面 僅TypeScript類型檢查過程
// 方括號運算子可以取出interface 某個屬性的類型
interface Foo {
    a: string;
}

type A = Foo['a']; // string

// 成員有5種形式:

// -物件屬性:

// -物件的屬性索引:
// 屬性索引共有string、number和symbol三種類型。
// 最多只能定義一個字串索引
interface MyObj {
    [prop: string]: number;
  
    a: boolean;      // 编译错误
  }

// 物件方法:
// 函數:
// 建構函數: