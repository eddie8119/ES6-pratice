maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 2); // 12
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28

function maxSum(arr, size) {
  let maxResult = -Infinity;
  if (size > arr.length) return null;

  for (let i = 0; i <= arr.length - size; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
    }
    if (attempt > maxResult) {
      maxResult = attempt;
    }
  }
  return maxResult;
}
