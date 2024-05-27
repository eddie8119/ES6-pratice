// 不斷請求 產生阻塞

function throttle(func, delay) {
  let timer;
  return function () {
    if (timer) return;

    // 定時器完成後被釋放，並且不會造成記憶體洩漏
    timer = setTimeout(() => {
      func();
      timer = null; //想檢查其他地方需要檢查 timer 是否仍然在活動
    }, delay);
  };
}
