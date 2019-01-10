'use strict';

var appRoot = document.getElementById('app');

var visible = false;

var toggleDetails = function toggleDetails() {
    visible = !visible;
    renderApp();
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleDetails },
            visible ? 'Hide' : 'Show',
            ' details'
        ),
        visible && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'IT ALMOST BEAT GOGGLE'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};
renderApp();
