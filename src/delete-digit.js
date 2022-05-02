const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = Array.from(n.toString());
  let numBig = 0;
  for (let i = 0; i < arr.length; i++){
    let newArr = arr.slice();
    newArr.splice(i, 1);
    let num = +newArr.join('');
    if (num > numBig) {
      numBig = num;      
    }
  }
  return numBig;
}

module.exports = {
  deleteDigit
};
