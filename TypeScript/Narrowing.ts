// && 、||、!
// JavaScript 会做隐式类型转换，像 0 、NaN、""、0n、null undefined 这些值都会被转为 false
// 很適用于防范 null和 undefiend 这种值的时候

function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
      for (const s of strs) {     
      }
    }
  }


// 注意"空字符串": 在基本类型上的真值检查很容易导致错误:。如果传入的是空字符串，真值检查判断为 false

function printAll2(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
      if (typeof strs === "object") {
       
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }