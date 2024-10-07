// 鄰居互換 移動

function bubbleSort(arr) {
  let n = arr.length;
  // 外層循環表示一輪迭代
  for (let i = 0; i < n - 1; i++) {
    let swapped = false; // 記錄當前迭代是否發生交換
    // 內層循環進行相鄰元素的比較和交換
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 交換元素
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true; // 發生了交換
      }
    }
    // 如果一整輪沒有交換，表示已經排序完成
    if (!swapped) {
      break;
    }
  }
  return arr;
}
