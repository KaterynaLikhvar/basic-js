const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 if(!sampleActivity
  ||isNaN(sampleActivity) 
  || typeof(sampleActivity) !== 'string' 
  || Number(sampleActivity) <= 0
  || Number(sampleActivity) > MODERN_ACTIVITY){
    return false;
  } 

  let num = +sampleActivity;
  const k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.ceil( (Math.log(MODERN_ACTIVITY/num) / k));

  return t;
};
