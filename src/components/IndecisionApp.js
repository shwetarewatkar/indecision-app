import React from 'react';
import AddOption from'./AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

export default class IndecisionApp extends React.Component{
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
