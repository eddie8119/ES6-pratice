// undefined和null這兩個值不能轉為對象，"任何值都可以賦值給Object類型"
let obj:Object
obj = undefined // error
obj = null // error

// {} 符號也可定義為Object類型
let obj2:{}

//小寫的object也可定義 但"不能包含原始型別"
// 建議"總是用小寫類型"object




// 使用者自訂的屬性和方法都不存在於物件類型中。不能使用