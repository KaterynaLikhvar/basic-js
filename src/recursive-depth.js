const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(!Array.isArray(arr)) {
      return 0;
    }
    let level = 0;
      for(let item in arr){
        let depth = this.calculateDepth(item);
      level = Math.max(level, depth + 1);
     
    }
    
    return level;
  }
};
