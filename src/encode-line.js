const { NotImplementedError } = require('../extensions/index.js');

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
  let result = '';
  let counts = 1;
  let i = 0; 
  while (i < str.length) {
    if (str[i] === str[i + 1]){
      for (let j = i; j < str.length; j++){
        if (str[j] === str[j + 1]){
          counts += 1;
        } else {
          result = `${result}${counts}${str[i]}`;
          i = i + counts;
          counts = 1;
          break;
        }
      }
    } else {
        result = `${result}${str[i]}`
        i += 1;
    }
  }
  return result
}

module.exports = {
  encodeLine
};
