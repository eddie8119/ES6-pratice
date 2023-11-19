// 連接
// 多個promise用 "return then" 連接
function promise(num) {
  return new Promise((resolve, reject) => {
    num ? resolve("成功") : reject("失敗");
  });
}

promise(1)
  .then((sucess) => {
    console.log(sucess);
    return promise(2);
  })
  .then((sucess) => {
    console.log(sucess);
    return promise(0); //進入catch
  });

// fetch是web api / axios是留覽器 nodejs 專門http請求的函式庫
// fetch接收response格式 要用.json()轉換 / axios接收json格式
// 錯誤情境: 404 500 fetch都會接收成果 需要後續判斷 / axios  404 500會進入reject (因此axios優)
// 兩者都基於promise 所以可以用then接收成功 使用catch接收失敗

fetch("url")
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    console.log(json);
  });

axios("url").then((json) => {
  console.log(json);
});
