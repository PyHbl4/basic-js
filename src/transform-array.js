const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error (`'arr' parameter must be an instance of the Array!`);
  }
  let array = arr.slice();
  let result = [];
  let i = 0;
  while (i < array.length){
    if (array[i] === '--discard-next'){
      i = i + 2;
    } else if (array[i] === '--discard-prev'){
      if(result.length > 0){
        result.pop();
        i = i + 1;
      } else {
        i = i + 1;
      }
    } else if (array[i] === '--double-next'){
      if (array[i + 1]){
      result.push(array[i + 1]);
      result.push(array[i + 1]);
      i = i + 2;
      } else {i = i + 1}
    } else if (array[i] === '--double-prev'){
      if(result.length > 0){
        result.push(array[i - 1]);
        i = i + 1;
      } else {
        i = i + 1;
      }
    } else if (!array[i]){
      i = i + 1;
    } else {
      result.push(array[i]);
      i = i + 1;
    }
  }
  return result;
}

module.exports = {
  transform
};
