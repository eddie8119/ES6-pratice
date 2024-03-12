// 泛型的就是帶有「型別參數」（type parameter）
function getFirst<T>(arr:T[]):T {
    return arr[0];
  }

//   複雜的參數 推斷不出類型參數的值，這時就必須"明確給出"