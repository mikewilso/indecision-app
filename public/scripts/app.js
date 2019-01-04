"use strict";

console.log('app.js is running.');

// JSX - JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    "Some more info"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Michael Wilson"
  ),
  React.createElement(
    "p",
    null,
    "Age: 29"
  ),
  React.createElement(
    "p",
    null,
    "Location: Boulder"
  )
);

var appRoot = document.getElementById("app");

//ReactDOM.render takes 2 args, the jsx template and the DOM element
ReactDOM.render(templateTwo, appRoot);
