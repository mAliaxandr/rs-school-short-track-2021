/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  const arr = domains;
  arr.forEach((i) => {
    const itemArr = i.split('.');
    let item = '';
    itemArr.reverse();
    itemArr.forEach((k) => {
      item += `.${k}`;
      if (obj[item]) {
        obj[item] += 1;
      } else {
        obj[item] = 1;
      }
    });
  });
  return obj;
}

module.exports = getDNSStats;
