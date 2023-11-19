// 讓函式記憶體 避免被釋放
// 函式內有個函式 與變數產生關連

//延伸運用- 私有方法: 匯出物件件例大量方法
function storeMoney(initValue) {
  let money = initValue;

  return {
    increase: function (price) {
      money += price;
    },
    decrease: function (price) {
      money -= price;
    },
    value: function () {
      return money;
    },
  };
}

let mingMoney = storeMoney(100);
storeMoney.increase(20);
storeMoney.decrease(10);
storeMoney.value();
