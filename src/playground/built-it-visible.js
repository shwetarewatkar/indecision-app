class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            visibility : false
        }
    }
    handleVisibilityToggle(){
        this.setState((prevState) => {
            return{
                visibility : !prevState.visibility
            }
        });
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibilityToggle}>
                    {this.state.visibility ? 'Hide' : 'Show'}
                </button>
                {this.state.visibility && (<p>Here is Info</p>)}
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const toggleButton = () =>{
//     visibility = !visibility;
//     render();
// }

// let visibility = false;
// const render = () => {
//     const toggle = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleButton}>
//                 {visibility ? "hide" : "show"}
//             </button>
//             {visibility && (<div><p>here are some details</p></div>)}
//         </div>
        
//     );
//     ReactDOM.render(toggle,appRoot);
// }


// const appRoot = document.getElementById('app');
// console.log("toggle visibility");
// render()