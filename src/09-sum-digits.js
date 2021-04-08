/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = `${n}`;

  while (str.length > 1) {
    const arr = str.split('');
    let res = 0;
    arr.forEach((i) => {
      res += +i;
    });
    str = `${res}`;
  }

  return +str;
}

module.exports = getSumOfDigits;
