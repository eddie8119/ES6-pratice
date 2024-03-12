// 3.never 類型
// 空類型
// 不可能傳回值的函數




// 聯合類型，剩餘的情況就屬於never類型
function fn(x:string|number){
    if (typeof x === 'string') {}
    else if (typeof x === 'number') {}
    else{
        x; // never 类型
    }
}


// never可以賦值給任意其他類型
function f():never {
    throw new Error('Error');
  }
let v1: string = f(); 
let v2: number = f();
let v3: boolean = f();

// 空集合是任何集合的子集
// 底層類型（bottom type）