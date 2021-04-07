/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arr = n.split('-');
  let result = true;
  arr.forEach((i) => {
    if (parseInt(i, 16) || i === '00') {
      if (i.length > 2) {
        result = false;
      }
    } else {
      result = false;
    }
  });
  return result;
}

module.exports = isMAC48Address;
