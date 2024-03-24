///////////Creating object types///////////////

const tomScore: { name: string; score: number; } = {
    name: "Tom",
    score: 70
  }

  
///////////Creating type aliases///////////////

//   type alias 型別別名
// "重複使用"類型的機制
// 類型別名可用於箭頭函數：

type Log = (message: string) => void;

const log = (message: string) => {
  console.log(message);
};

// "嵌入"(我取名的)
type Score = {
  name: string;
  score: number;
  pass?: boolean;
  log: Log;
};

///////////Creating union types///////////////

let age: number | null | undefined;

type Age = number | null | undefined;

// 字串文字聯合類型
type Fruit = "Banana" | "Apple" | "Pear";

//物件
type Actions = { type: "loading" } | { type: "loaded"; data: { name: string } };
const loadingAction: Actions = { type: "loading" };


///////////intersection type///////////////
type Name = {
  firstName: string;
  lastName: string;
};
type PhoneNumber = {
  landline: string;
  mobile: string;
};

type Contact = Name & PhoneNumber;  // 交集


// 介面比類型別名更強大是一個常見的誤解，
// 因為介面可以擴展，但我們現在知道這在類型別名中也是可能的

