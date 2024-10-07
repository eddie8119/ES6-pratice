// 不斷請求 產生阻塞
function coloring() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function throttle(func, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;

    if (timer) return;
    // 定時器完成後被釋放，並且不會造成記憶體洩漏
    timer = setTimeout(() => {
      func.apply(context, args);
      timer = null; //在延遲任務之後發生 //想檢查其他地方需要檢查 timer 是否仍然在活動
    }, delay);
  };
}

window.addEventListener("resize", throttle(coloring, 2000));

// 節流：時間間隔 限制函數在一段時間內只能執行一次。
// 防抖：延遲函數的執行，只有在一段時間內沒有新的事件觸發時，才執行一次。
