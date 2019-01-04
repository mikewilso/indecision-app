var varName = 'Mike';
var varName = 'Michael';
console.log('varName', varName);

let letName = 'Rufus';
letName = 'Gunther';
console.log('letName', letName);

const constName = 'Arthur';
// constName = 'Rudy';
console.log('constName', constName);

function getPetName() {
    const petName = 'Hal';
    console.log(petName);
    return petName;
}

const petName = getPetName();
console.log(petName);

//Block scoping

const fullName = 'Michael Wilson';
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);