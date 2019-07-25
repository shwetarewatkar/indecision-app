class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    componentDidMount(){
        try{
            // console.log('fetching data'); //gets called when componet renders first time
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({ options}))
            }
        }catch(e){
            //do nothing
        }
        
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            console.log('saving data'); //gets called when componet updates e.g state or prop
        }
        
    }
    componetWillUnmount(){
        console.log('componentWillUnmount');
    }
    //handle delete option
    handleDeleteOptions(){
        // this.setState(() =>{
        //     return{
        //         options: []
        //     }
        // })
        this.setState(() => ({ options: []}))
    }
    handleDeleteOption(optionToRemove){
        // console.log("handle delete",option);
        this.setState((prevState) => ({
            options : prevState.options.filter((option)=>{
                return optionToRemove !== option;
            })
        }))
    }
    //handlepick
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        // // console.log(randomNum);
        alert(option);
    }
    //handleAddOption
    handleAddOption(option){
        if(!option){
            return 'Enter valid value'
        }else if(this.state.options.indexOf(option) > -1){
            return 'This opion already exists'
        }else{
            this.setState((prevState) =>{
                return{
                    options: prevState.options.concat([option])
                }
            })
            // this.setState((prevState) => ({ options: prevState.options.concat([option])}))
        }
    }
    render(){
        const title = "Indecision";
        const Subtitle ="Put Your Life In The Hands of a Computer!";
        
        return(
            <div>
                <Header title={title} Subtitle={Subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            {props.Subtitle && <h2>{props.Subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Some default'
}

// class Header extends React.Component{
//     render(){
//         // console.log(this.props);
//         return(
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.Subtitle}</h2>
//             </div>
//         )
//     }
// }

const Action = (props) => {
    return(
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                What Should I do?
              </button>
        </div>  
      );
}

// class Action extends React.Component{
//     render(){
    // return(
    //     <div>
    //         <button onClick={props.handlePick} disabled={!props.hasOptions}>
    //             What Should I do?
    //           </button>
    //     </div>  
    //   );
//     }
// }

const Options =(props) => {
    return(
        <div>
            {
                props.options.length === 0 && <p>Please Add an option to get started</p>
            }
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => (
                    <Option key={option} optionText={option}
                    handleDeleteOption={props.handleDeleteOption}/>
                ))
            }
        </div>
    )
}

// class Options extends React.Component{
//     render(){
//         // console.log("options array: ",this.props)
//         return(
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) =>{
//                         return <Option key={option} optionText={option}/>
//                     })
//                 }
//                 {/* <Option /> */}
//             </div>
//         )
//     }
// }

const Option = (props) => {
    return(
        <div>
            <p>{props.optionText}
            <button 
            onClick={ (e) =>{
                props.handleDeleteOption(props.optionText)
            }}
            >Remove</button></p>
        </div>
    )
}

// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//                 <p>{this.props.optionText}</p>
//             </div>
//         )
//     }
// }

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddoption = this.handleAddoption.bind(this);
        this.state ={
            error : undefined
        }
    }
    handleAddoption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        // this.setState(()=>{
        //     return{
        //         error
        //     }
        // })
        this.setState(() => ({ error }))
        if(!error){
            e.target.elements.option.value ="";
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddoption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

// const User = (props) => {
//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: </p>
//         </div>
//     )
// }
 
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));