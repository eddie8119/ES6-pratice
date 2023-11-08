// 箭頭函式
// "箭頭函式沒有自己的this"
// 會用外層作用域的this 如果外層沒有作用域就為全域 window

var myName = "globle eddie";

// 箭頭例子
var family = {
  myName: "local eddie",
  callName: () => {
    console.log(this.myName); //globle eddie
  },
};
family.callName();

// 傳統例子
var family = {
  myName: "local eddie",
  callName: function () {
    var fn = () => {
      //使用callName()作用域下的this
      console.log(this.myName); //local eddie
    };

    fn();
  },
};
family.callName(); //指向family

// 好處
// 當物件內函式執行時 需要傳入另一個函式作為參數 箭頭函式可以讓指向不改變
var person = {
  myName: "local amy",
  callName: function () {
    //一此為基準 產生一個作用域
    console.log(1, this.myName); //local amy

    setTimeout(() => {
      console.log(2, this.myName); //local amy
    }, 10);

    setTimeout(function () {
      //傳統函式的this 無法正確指向person
      console.log(3, this.myName); //globle eddie
    }, 10);
  },
};

person.callName();
