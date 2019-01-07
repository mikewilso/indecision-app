// arguments object - no longer bound with arrow functions

// use ES5 functions if you need access to arguments object
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Mike',
    cities: ['Miami', 'New York', 'Ireland'],
    printPlacesLived()  {
        return this.cities.map((city) => this.name + ' has lived in ' + city + "!");

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' ' + 'has lived in ' + city);
        // });
    }
}

// user.printPlacesLived();
console.log(user.printPlacesLived());

const multiplier = {
    // numbers - array of numbers
    numbers: [1, 2, 3, 4, 5, 6],
    // multiplyBy - single number
    multiplyBy: 3,
    // multiply - return a new array where the numbers have been multiplied - map method
    multiply () {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply()); 