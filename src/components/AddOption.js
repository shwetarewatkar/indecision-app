import React from 'react';

export default class AddOption extends React.Component{
    state ={
        error : undefined
    }

    handleAddoption = (e) =>{
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
    };
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddoption}>
                    <input type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}