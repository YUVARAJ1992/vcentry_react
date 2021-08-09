import React, { Component } from 'react';
import ChildComponent from '../components/child';

class ParentPageComponent extends Component {
    constructor(props){
        super(props);
            this.state = {
                username : 'Karthick',
                message : ''
            }
    }

    onReceivedValue = (value) => {
        console.log(value);
        this.setState({
            message : value
        })
    }

    render() {

        return (
            <div>
                <h1>The typed value is {this.state.message}</h1>
                <h1>This is Parent component</h1>
                <ChildComponent name={this.state.username} {...this.state} onLoadData={this.onReceivedValue} ></ChildComponent>
            </div>
        );
    }
}

export default ParentPageComponent;