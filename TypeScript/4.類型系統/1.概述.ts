// 五個原始型別: primitive value
// 一個複合型: object
// 兩個特殊值: undefined而且null 





// undefined / null 
// 各自只有一個值

// "如果沒有聲明類型的變量" 在關閉編譯設定noImplicitAny和strictNullChecks時，它們的類型會被推斷為any
let a:undefined //any

// 避免這種情況，要開啟選項strictNullChecks
let aa = undefined;   // undefined