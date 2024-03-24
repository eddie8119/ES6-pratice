// 2.unknown 類型
// 為了解決any類型「污染」問題
// 嚴格版的any
// any類型的地方，優先考慮設為unknown


// 限制:
// -unknown類型的變量，不能直接賦值給其他類型的變數（除any unknown型別）
// -不能直接呼叫unknown類型變數的方法和屬性
// -運算子有限 只能用比較運算


// 使用
// 要先限縮才能使用***
let c:unknown = 1;
if (typeof c === 'number') {
    let r = c + 10
}

