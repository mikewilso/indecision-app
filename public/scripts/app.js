console.log('app.js is running.');

// JSX - JavaScript XML
//var template = <p>This is JSX from app.js!</p>;

//Babel Translation
var template = React.createElement(
    'p',
    null,
    'This is JSX from app.js!'
  );
var appRoot = document.getElementById("app");

//ReactDOM.render takes 2 args, the jsx template and the DOM element
ReactDOM.render(template, appRoot);