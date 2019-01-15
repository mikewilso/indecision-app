const appRoot = document.getElementById('app');

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visible: false
        }
    }
    handleToggleVisibility(prevState) {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visible ? 'Hide' : 'Show'} details</button>
                {this.state.visible && (
                    <div>
                    <p>IT ALMOST BEAT GOGGLE</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, appRoot);





// const appRoot = document.getElementById('app');

// let visible = false;

// const toggleDetails = () => {
//     visible = !visible;
//     renderApp();
// };

// const renderApp = () => {
//     const template = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggleDetails}>{visible ? 'Hide' : 'Show'} details</button>
//         {visible && (
//             <div>
//                 <p>IT ALMOST BEAT GOGGLE</p>
//             </div>
//         )}
//         </div>
//     );
    
//     ReactDOM.render(template, appRoot);
// }
// renderApp();