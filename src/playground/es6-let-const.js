var nameVar = "Shweta";
var nameVar="mike";
console.log("nameVar: ",nameVar)

let nameLet ="jet";
nameLet="july";
console.log("nameLet: ",nameLet);

const nameConst ="Frank";
console.log("nameConst: ",nameConst)

function getPetName(){
    var petName = "hal";
    return petName;
}
const petName = getPetName();
console.log(petName);

const fullName ="Shweta Rewatkar";
let firstName;
if(fullName){
    firstName = fullName.split(' ')[0]
    console.log('firstName: ',firstName);
}
console.log(firstName);