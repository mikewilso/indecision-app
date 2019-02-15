console.log('utils.js is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

// export an expression, (a, b) => a - b; also works
export default subtract;

//default export - named exports

// export { square, add, subtract as default };