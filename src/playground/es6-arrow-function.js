function square(x) {
    return x * x;
};

console.log(square(5));

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(9));

const getFirstName = (fullName) => {
    return(fullName.split(' ')[0]);
};

const getFirstNameAgain = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Wilson'));
console.log(getFirstNameAgain('Brett Willikers'));