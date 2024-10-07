//Linear Search sequential search
// n - 1 - n/2

function linearSearch(arr, n) {
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === n) return i;
  }
  return -1;
}
