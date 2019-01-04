"use strict";

console.log('app.js is running.');

// JSX - JavaScript XML
var template = React.createElement(
  "h1",
  null,
  "Changed to H1 with --watch"
);
var appRoot = document.getElementById("app");

//ReactDOM.render takes 2 args, the jsx template and the DOM element
ReactDOM.render(template, appRoot);
