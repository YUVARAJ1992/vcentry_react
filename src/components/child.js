import React, { Component } from 'react';

class ChildComponent extends Component {

    onHandleInput = (event) => {
        console.log(event.target.value);
        this.props.onLoadData(event.target.value)
    }

    render() {
        return (
            <div>
                <h1>This is child page component</h1>
                <h1>The username is : {this.props.name} </h1>
                <h1>The username is : {this.props.username} </h1>
                <div>
                    <input type="text" placeholder="Enter the value" onChange={this.onHandleInput} />
                </div>
            </div>
        );
    }
}

export default ChildComponent;