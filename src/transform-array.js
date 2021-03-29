const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arr2 = [...arr];
  if(!Array.isArray(arr)) throw Error;
  
  for (let i = 0; i < arr.length; i++){

    if(arr2[i] == '--double-next') {
      if(typeof(arr2[i+1]) === 'undefined' || arr2[i+1] === null){
        arr2[i] = '';
      } else {
        arr2[i] = arr2[i+1];
      }

    } 
    if(arr2[i] == '--double-prev') {
      if(typeof(arr2[i-1]) === 'undefined' || arr2[i-2] == '--discard-next'){
        arr2[i] = '';
      } else {
          arr2[i] = arr2[i-1];
      }
    }
      if(arr2[i] == '--discard-next') {
        if(typeof(arr2[i+1]) === 'undefined' || arr2[i+1] === null || arr[i + 1] == '--double-prev'){
           arr2[i] = '';
        } else {
          arr2[i] = '';
          arr2[i+1] = arr2[i];
        }
      }
      if(arr2[i] == '--discard-prev') {
        if(typeof(arr2[i-1]) === 'undefined' || arr2[i-1] === null){
           arr2[i] = '';
        } else {
          arr2[i] = '';
          arr2[i-1] = arr2[i]
        }
   
      }
    }
  return [...arr2.filter(item => item !== '')];
};
