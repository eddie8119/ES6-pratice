/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (s === "") return 0;

  let arr = s.trim().split(" ");

  return arr[arr.length - 1].length;
};
