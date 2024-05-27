// 兩個箭頭;

// averagePair
averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while (left < right) {
    let temp_avg = (arr[left] + arr[right]) / 2;
    if (temp_avg === avg) {
      result.push([arr[right], arr[left]]);
      left++;
      right--;
    } else if (temp_avg > avg) {
      right--;
    }
  }
  return result;
}

// palindrome

// palindrome("tacocat"); // true
// palindrome("amanaplanacanalpanama"); // true
palindrome("asdfsafeaw"); // false

function palindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    } else if (str[left] === str[right]) {
      left++;
      right--;
    }
  }
  return true;
}

// Subsequence

// isSubsequence("hello", "hello Dear"); // true
// isSubsequence("book", "brooklyn"); // true
// isSubsequence("abc", "bac"); // false (order matters)
isSubsequence("", "abc"); // true

function isSubsequence(str1, str2) {
  let pointerOne = 0;
  let pointerTwo = 0;

  while (pointerTwo < str2.length) {
    if (str2[pointerTwo] === str1[pointerOne]) {
      pointerOne++;
    } else if (pointerOne === str1.length) {
      return true;
    }
    pointerTwo++;
  }
  return false;
}
