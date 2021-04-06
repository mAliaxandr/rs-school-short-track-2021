/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const arr = matrix;
  const indexes = {};
  let result = 0;
  arr.forEach((i) => {
    i.forEach((k, index) => {
      if (indexes[index] !== 0) {
        result += k;
      }
      if (k === 0) {
        indexes[index] = 0;
      }
    });
  });
  return result;
}

module.exports = getMatrixElementsSum;
