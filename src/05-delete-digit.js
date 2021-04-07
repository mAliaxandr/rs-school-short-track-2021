/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = `${n}`;
  const arr = str.split('');
  let result = null;
  for (let i = 0; i < arr.length; i++) {
    const array = arr;
    const num = array.splice(i, 1);
    const res = +array.join('');
    if (res > result) {
      result = res;
    }
    array.splice(i, 0, num[0]);
  }
  return result;
}

module.exports = deleteDigit;
