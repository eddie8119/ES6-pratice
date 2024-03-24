//readonly 只讀數組
const arr:readonly number[] = [0, 1];


// number[]是readonly number[]的子類型。
// 子類型繼承了父類型的所有特徵，並加上了自己的特徵，可以用於所有使用父類型的場合，反過來就不行
let a1:number[] = [0, 1];
let a2:readonly number[] = a1; // 正确