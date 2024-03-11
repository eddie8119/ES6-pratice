// 1.any 類型
// 會關閉這個變數的型別檢查
// 表示開發者想要自己來處理這些程式碼
// 頂層型別（top type）

// 補充
$ tsc --noImplicitAny app.ts //開啟設定 只要推斷出any類型就會報錯。
// 但是 
var x; // 不报错
let y; // 不报错
// const指令沒有這個問題，const宣告變數時，必須同時初始化

// 污染問題，把錯誤留到運行時
let x2 :any = 'hello';
let y2 :number = 10;
x2 = y2; // 不报错
