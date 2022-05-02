const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
var resultArray = [];
const chainMaker = {
  getLength() {
    return resultArray.length;
  },
  addLink(value) {
    if (typeof value === "function"){
      resultArray.push(`( ${value} )`);
      return chainMaker;
    } else if (value.length > 0) {
    resultArray.push(`( ${value} )`);
    return chainMaker;
    } else {
      resultArray.push(`(  )`);
      return chainMaker;
    }
  },
  removeLink(position) {
    if (resultArray.length > position){
    resultArray.splice((position - 1), 1);
    return chainMaker;
    } else {
      throw new Error ("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    let tempArray = resultArray.slice();
    resultArray = [];
    for (let i = (tempArray.length - 1); i >= 0; i = i - 1){
      resultArray.push(tempArray[i]);
    }
    return chainMaker;
  },
  finishChain() {
    return resultArray.join('~~');
  }
};

module.exports = {
  chainMaker
};
