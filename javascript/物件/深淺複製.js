// 淺層複製
// 避免修改變動到原始物件內的屬性
var copyFamily = Object.assign({}, family);
var copyFamily = { ...family };

// 深層複製
// 轉為字串 讓他與原始字串毫無關聯性 再轉回物件
JSON.parse(JSON.stringify());
