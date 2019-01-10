const appRoot = document.getElementById('app');

let visible = false;

const toggleDetails = () => {
    visible = !visible;
    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleDetails}>{visible ? 'Hide' : 'Show'} details</button>
        {visible && (
            <div>
                <p>IT ALMOST BEAT GOGGLE</p>
            </div>
        )}
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}
renderApp();