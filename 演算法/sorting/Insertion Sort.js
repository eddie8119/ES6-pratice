// 第0項已固定 從第一項檢查
// while i >= 0 && A[i] > key

function insertionSort(arr) {
  // 第0項已固定 從第一項檢查
  for (let j = 1; j <= arr.length; j++) {
    let key = arr[j];
    i = j - 1;
    while (i >= 0 && A[i] > key) {
      arr[i + 1] = arr[i];
      i--;
    }
    arr[i + 1] = key;
  }
  return arr;
}
