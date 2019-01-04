console.log('app.js is running.');

// JSX - JavaScript XML
var template = <h1>Changed to H1 with --watch</h1>;
var appRoot = document.getElementById("app");

//ReactDOM.render takes 2 args, the jsx template and the DOM element
ReactDOM.render(template, appRoot);