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

// 圖片加載
const imgPromise = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error("img error"));
    };
  });
};

imgPromise(imgAddress)
  .then((img) => {
    document.body.appendChild(img);
  })
  .catch((err) => {
    document.body.innerHTML = err;
  });

//紅綠燈
function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}

function lightUp(duration, cb) {
  //返回一個 Promise。這個 Promise 在指定的持續時間後執行回調函數
  return new Promise((resolve) =>
    setTimeout(() => {
      cb();
      resolve();
    }, duration)
  );
}

function alternateLights() {
  // Promise.resolve() 可以使你的程式碼更加一致和清晰，因為它明確地表示這是一個 Promise 鏈的開始
  Promise.resolve()
    .then(() => lightUp(3000, red))
    .then(() => lightUp(2000, green))
    .then(() => lightUp(1000, yellow))
    .then(() => alternateLights());
}

alternateLights();
