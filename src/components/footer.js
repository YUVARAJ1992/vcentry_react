import React, { Component } from 'react'

class FooterComponent extends Component {

    constructor(props){
        super(props);
        this.state = { 
           email : '',
           password : ''
        }
    }

    onHandleInput = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onLogin(){
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <div className="login-form">
                    <div className="m-top-15">
                        <label className="label">Enter Email Id: </label>
                        <input type="text" name="email" placeholder="Enter the email ID here" onChange={this.onHandleInput} />
                    </div>
                    <div className="m-top-15">
                        <label className="label">Enter Password: </label>
                        <input type="password" name="password" placeholder="Enter the password here" onChange={this.onHandleInput} />
                    </div>
                    <div className="m-top-15">
                        <button className="btn" onClick={() => { this.onLogin()}}>Login</button>
                    </div>
                </div>
            </div>
        );
    }
}


export default FooterComponent;