const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members){
  return false;
}

let membersStrOnly = [];
let arrTrim = [];
let arrFinish = [];

for (let i = 0; i < members.length; i++){
  if (typeof(members[i]) == 'string'){
    membersStrOnly.push(members[i])
    
  }
}
for (let i = 0; i < membersStrOnly.length; i++)    {
    arrTrim.push(membersStrOnly[i].trim());
    arrFinish.push(arrTrim[i][0].toUpperCase())
  }
return arrFinish.sort().join('');
};
