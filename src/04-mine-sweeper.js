/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  matrix.forEach((i) => {
    const itemArray = new Array(i.length);
    itemArray.fill(0);
    result.push(itemArray);
  });
  matrix.forEach((i, indexI) => {
    i.forEach((item, indexItem) => {
      if (item) {
        if (result[indexI][indexItem + 1] === 0 || result[indexI][indexItem + 1] > 0) {
          result[indexI][indexItem + 1] += 1;
        }
        if (result[indexI][indexItem - 1] === 0 || result[indexI][indexItem - 1] > 0) {
          result[indexI][indexItem - 1] += 1;
        }
        if (indexI > 0) {
          if (result[indexI - 1][indexItem] === 0 || result[indexI - 1][indexItem] > 0) {
            result[indexI - 1][indexItem] += 1;
          }
          if (result[indexI - 1][indexItem + 1] === 0 || result[indexI - 1][indexItem + 1] > 0) {
            result[indexI - 1][indexItem + 1] += 1;
          }
          if (result[indexI - 1][indexItem - 1] === 0 || result[indexI - 1][indexItem - 1] > 0) {
            result[indexI - 1][indexItem - 1] += 1;
          }
        }
        if (indexI < matrix.length - 1) {
          if (result[indexI + 1][indexItem] === 0 || result[indexI + 1][indexItem] > 0) {
            result[indexI + 1][indexItem] += 1;
          }
          if (result[indexI + 1][indexItem + 1] === 0 || result[indexI + 1][indexItem + 1] > 0) {
            result[indexI + 1][indexItem + 1] += 1;
          }
          if (result[indexI + 1][indexItem - 1] === 0 || result[indexI + 1][indexItem - 1] > 0) {
            result[indexI + 1][indexItem - 1] += 1;
          }
        }
      }
    });
  });
  return result;
}

module.exports = minesweeper;
