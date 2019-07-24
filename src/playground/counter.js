class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count : 0
        }
    }
    handleAddOne(){
        // console.log("+1");
        this.setState((prevState) => {
            console.log(prevState)
            return{
                count : prevState.count + 1
            }
        });
    }
    handleMinusOne(){
        // console.log("-1");
        this.setState((prevState)=>{
            return{
                count : prevState.count - 1
            }
        })
    }
    handleReset(){
        // console.log("reset");
        this.setState(()=>{
            return{
                count : 0
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter />,document.getElementById('app'));


// const user = {
//     name: "Shweta",
//     age: 24,
//     location: "Sacramento"
// }
// function getLocation(location){
//     if(location){
//         return <p>location: {location}</p>;
//     }
// }
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const minusOne =() =>{
//     count--;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// // console.log(templateTwo);



// console.log("App.js is running")

// const renderCounterApp =()=>{
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <br />
//             <button onClick={minusOne}>-1</button>
//             <br />
//             <button onClick={reset}>reset</button>
//         </div>
//     )
//     ReactDOM.render(templateTwo,appRoot)
// }
// renderCounterApp();