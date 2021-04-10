/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let count = 1;
  let res = '';

  arr.forEach((i, index) => {
    if (arr[index + 1] === i) {
      count += 1;
    } else if (count > 1) {
      res = `${res}${count}${i}`;
      count = 1;
    } else {
      res = `${res}${i}`;
      count = 1;
    }
  });
  return res;
}

module.exports = encodeLine;
