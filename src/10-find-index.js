/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const arr = array;
  let maxIndex = arr.length - 1;
  let minIndex = 0;
  const { length } = arr;
  let index = Math.floor(length / 2);
  while (arr[index] !== value) {
    if (arr[index] > value) {
      maxIndex = index;
      index = Math.floor(maxIndex / 2);
    } else if (arr[index] < value) {
      minIndex = index;
      index = maxIndex - Math.floor((maxIndex - minIndex) / 2);
    }
  }
  return index;
}

module.exports = findIndex;
