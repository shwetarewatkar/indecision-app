class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    //handle delete option
    handleDeleteOptions(){
        this.setState(() =>{
            return{
                options: []
            }
        })
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
        }
    }
    render(){
        const title = "Indecision";
        const Subtitle ="Put Your Life In The Hands of a Computer!";
        
        return(
            <div>
                <Header title={title} Subtitle={Subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        // console.log(this.props);
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.Subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component{
    render(){
        return(
          <div>
              <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
                  What Should I do?
                </button>
          </div>  
        );
    }
}

class Options extends React.Component{
    render(){
        // console.log("options array: ",this.props)
        return(
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) =>{
                        return <Option key={option} optionText={option}/>
                    })
                }
                {/* <Option /> */}
            </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.optionText}</p>
            </div>
        )
    }
}

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
        e.target.elements.option.value ="";
        const error = this.props.handleAddOption(option);
        
        this.setState(()=>{
            return{
                error
            }
        })
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

 
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));