/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  const arr = array;
  const indexs = [];
  arr.forEach((i, index) => {
    if (i === -1) {
      indexs.push(index);
    }
  });
  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
      if (arr[j] > arr[j + 1]) {
        const swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
  }
  arr.reverse();
  for (let i = 0; i < indexs.length; i++) {
    arr.pop();
  }
  arr.reverse();
  for (let i = 0; i < indexs.length; i++) {
    arr.splice(indexs[i], 0, -1);
  }

  return arr;
}

module.exports = sortByHeight;
