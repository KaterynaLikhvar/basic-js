const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(value === undefined){
      return this.chain.push(`(  )`);
    }
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number' || !Number.isInteger(position)){
     this.chain = [];
     throw new Error();
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
   this.chain.reverse();
   return this;
  },
  finishChain() {
    let result = this.chain;
    this.chain = [];
    return result.join('~~');
  }
};

module.exports = chainMaker;
