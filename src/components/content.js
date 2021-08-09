import React, { Component } from 'react'

import Productlist from './productlist';

class ContentComponent extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = { 
    //         username : ''
    //     }
    // }

    // onHandleInput = (event) => {
    //     // console.log(event.target.value)
    //     this.setState({
    //         username : event.target.value
    //     })
    // }

    render(){
        return(
            <div className="content">
                {/* <div className="width-50-per">
                    <h1>This is ContentComponent</h1>
                    <input type="text" placeholder="Enter email id..." onChange={this.onHandleInput}/>
                    <h1>{this.state.username}</h1>
                </div> */}
                <h1>Content Page</h1>
                <Productlist></Productlist>
            </div>
        );
    }
}


export default ContentComponent;