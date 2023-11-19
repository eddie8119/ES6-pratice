["1", "2", "3"].map(parseInt);
第1次循環: parseInt("1", 0);

第2次循環: parseInt("2", 1);

第3次循環: parseInt("3", 2);

// 輸出: [1, null, null]

// 知識點:

// map
// map((item, index,arr)) 注意他預設3個參數

// parseInt
// parseInt(string, radix) radix進制
