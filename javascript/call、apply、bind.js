// bind
// bind沒有執行函式 而是複製一個新的函式
let person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {
    return this.firstName + this.lastName;
  },
};

let logName = function (lang1, lang2) {
  console.log("Logged: " + this.getFullName());
};

let logPersonName = logName.bind(person);
logPersonName();

// call
// 真的執行
logName.call(person, "en", "es");

// apply
logName.apply(person, ["en", "es"]);

// IIFE寫法
(function (lang1, lang2) {
  console.log("Logged: " + this.getFullName());
}).apply(person, ["en", "es"]);

// function borrowing
// b物件 借用別人a物件 裡的方法 就好像b物件自己也有這個方法
let person2 = {
  firstName: "Jane",
  lastName: "Doe",
};

person.getFullName.apply(person2);

// function currying
// 跟bind有關- 複製一個新的函式 並且並不執行
// 建立函式拷貝 並設定域設參數
function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(4);
let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(4);
