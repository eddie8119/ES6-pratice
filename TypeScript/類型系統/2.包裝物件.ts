//五種原始型別的值 在需要時，會自動產生的物件。
'hello'.charAt(1) // 'e'
// 字串會自動轉為包裝對象，charAt()其實是定義在包裝對像上。

//symbol bigint類型 無法直接取得它們的包裝物件
//Symbol()和BigInt()不能作為建構函式使用


// "有new呼叫"，才會傳回包裝物件。不然就只是回傳該原始型別
const s = new String('hello');
typeof s // 'object'
s.charAt(1) // 'e