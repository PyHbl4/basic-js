const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
    let emailArr = Array.from(email);
    let index;
    for (let i = emailArr.length - 1; i >=0; i--){
      if (emailArr[i] === '@') {
        index = i;
        break;
      }
    }
    return emailArr.slice(index + 1).join('');
 }

module.exports = {
  getEmailDomain
};
