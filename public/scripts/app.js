'use strict';

function square(x) {
    return x * x;
};

console.log(square(5));

// const squareArrow = (x) => {
//     return x * x;
// };

var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareArrow(9));

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

var getFirstNameAgain = function getFirstNameAgain(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Mike Wilson'));
console.log(getFirstNameAgain('Brett Willikers'));
