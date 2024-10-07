// 重新開始 永遠執行最後一次的

// 階段一
function payMoney() {
  console.log(this);
}

//要使用高階函數 事件觸發才能執行 不然程式會直接執行
function debounce(func, delay) {
  return function () {
    setTimeout(() => {
      func();
    }, delay);
  };
}

button.addEventListener("click", debounce(payMoney));

// 階段二
function debounce(func, delay) {
  let timer; // 這裡是個閉包 讓他們之間有聯繫
  return function () {
    let context = this; //callback this 會脫鉤成window 所以在這把this保存下來
    let args = arguments;

    clearTimeout(timer); //多個函數共用一個外部變量
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
// <!-- 步驟 -->
// 設定延時
// 但是重新點擊 並不會重新計時 所以需要清除
// 重新設定定時
// 讓變量產生聯繫

// <!-- 問題 -->
為什麼要寫;
return function () {
  //你返回的是一個新的函數，這個新的函數在被調用時會執行
  func();
};
而不直接寫;
return func();
呢;
// return func() 時，你實際上是在調用 func 函數，並返回它的結果
