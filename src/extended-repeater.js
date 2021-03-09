const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
 if (options.separator === undefined) {
    options.separator  = '+';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator  = '|';
  }
  if (options.additionRepeatTimes === undefined){
    options.additionRepeatTimes = 1;
  }
  if (options.addition === undefined) {
    options.addition = '';
  }
  if (options.repeatTimes === undefined) {
    return str + options.addition
  }
  let strSeparator =  (str 
                      + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) 
                      + options.addition + options.separator).repeat(options.repeatTimes)
  let strRepeat = strSeparator.split('').slice(0, -options.separator.length).join('');
  
  return strRepeat;
};
  
