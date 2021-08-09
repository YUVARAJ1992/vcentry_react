import React, { Component } from 'react';

class LifeCycleComponent extends Component {
    constructor(props){
        super(props);
        console.log("This is CONSTRUCTOR Method");
        this.state = {
          name : 'Yuvi'
        };
      }
    
      componentWillMount(){
        console.log("This is COMPONENT WILL MOUNT Method");
      }
    
      componentDidMount(){
        console.log("This is COMPONENT DID MOUNT Method");
      }
    
      onClickButton(){
        this.setState({
          name : 'Yuvaraj'
        })
      }
    
      shouldComponentUpdate(nextProps, nextState){
        console.log(this.state.name , nextState);
        console.log("This is SHOULD COMPONENT UPDATE Method");
        if(this.state.name == nextState.name){
          return false;
        }else{
          return true;
        }
      }
    
      componentWillUpdate(){
        console.log("This is COMPONENT WILL UPDATE Method");
      }
    
      componentDidUpdate(){
        console.log("This is COMPONENT DID UPDATE Method")
      }
    
      componentWillUnmount(){
        console.log("This is COMPONENT WILL UNMOUNT Method")
      }
    
      render() {
        console.log("This is RENDER Method")
        return (
          <div>
            <h1>This is a LifeCycleComponent</h1>
            <h1>The Username is : {this.state.name}</h1>
            <button onClick={() => this.onClickButton()}>Update Username</button>
          </div>
        );
      }
    }
    
export default LifeCycleComponent;