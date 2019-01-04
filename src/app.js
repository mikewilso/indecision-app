console.log('app.js is running.');

// JSX - JavaScript XML
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>Some more info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var templateTwo = (
  <div>
    <h1>Michael Wilson</h1>
    <p>Age: 29</p>
    <p>Location: Boulder</p>  
  </div>
);

var appRoot = document.getElementById("app");

//ReactDOM.render takes 2 args, the jsx template and the DOM element
ReactDOM.render(templateTwo, appRoot);