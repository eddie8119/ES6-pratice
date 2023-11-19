// first-class
// 函式如同變數一樣運用
// 跟閉包 高階函式一起看

// 1.函式可以做為參數
function callMing() {
  return "小明,";
}

function greeting(fn, someText) {
  console.log(fn() + someText);
}

greeting(callMing(), "hi");

// 2.函式做為回傳值
let callSomeone = function (name) {
  let myName = name;
  return function () {
    console.log(`${myName}, 你好`);
  };
};

let callMay = callSomeone("小美"); //呼叫callSomeone都是獨立的
callMay();
let callJay = callSomeone("小杰");
callJay();
