
// class會創造一個值 故單純想要一個類型，使用type interface

// 共同:
// 都能為物件類型命名

// 差異:
// （1）type能夠表示非物件類型，而interface只能表示物件類型
// （2）interface可以繼承其他類型，type不支援繼承。
// （3）同名interface會自動合併，同名type則會報錯 (在第三方庫上添加缺失的類型資訊非常有用)
// 只有type可以組成聯合類型

type Person = {
name: string;
};
interface IPerson {
name: string;
}

let bob: Person = {
name: "Bob",
};
let fred: IPerson = {
name: "Fred",
};
bob = fred;

//類型 Person 和 IPerson 以下內容是等效的，因為類型成員是相同的
//類型名稱在 TypeScript"類型相容性"中並不重要，重要的是結構