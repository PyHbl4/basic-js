const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  let arrayMac = n.split('-')
  if (arrayMac.length === 6){
    for (let i = 0; i < arrayMac.length; i++){
      if (arrayMac[i].length === 2){
        for (let j = 0; j < arrayMac[i].length; j++){
          if(arrayMac[i][j] === '0' || arrayMac[i][j] === '1' || arrayMac[i][j] === '2' || arrayMac[i][j] === '3' || arrayMac[i][j] === '4' || arrayMac[i][j] === '5' || arrayMac[i][j] === '6' || arrayMac[i][j] === '7' || arrayMac[i][j] === '8' || arrayMac[i][j] === '9' || arrayMac[i][j] === 'A' || arrayMac[i][j] === 'B' || arrayMac[i][j] === 'C' || arrayMac[i][j] === 'D' || arrayMac[i][j] === 'E' || arrayMac[i][j] === 'F'){

          } else {return false}
        }
      } else {return false}
    }
    return true
  } else {return false}
}
module.exports = {
  isMAC48Address
};
