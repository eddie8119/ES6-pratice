// 泛型: 允許將類型作為參數傳遞給特定類型
// 最容易理解的泛型類型之一是 Array

///////////CPromise<T>///////////////
//  Promise 指定非同步程式碼的回傳類型
const promisedResponse: Promise<Response> = fetch("https://swapi.dev/api/");


///////////Record<K,V>///////////////
// 可以有多個參數

type Result = {
    firstName: string;
    surname: string;
    score: number;
  };
  type ResultRecord = Record<string, Result>;

  const records: ResultRecord = {
    rodj: {
      firstName: "Rod",
      surname: "James",
      score: 70,
    },
    janes: {
      firstName: "Jane",
      surname: "Smith",
      score: 95,
    },
    fredp: {
      firstName: "Fred",
      surname: "Peters",
      score: 60,
    },
  };
  console.log(records);