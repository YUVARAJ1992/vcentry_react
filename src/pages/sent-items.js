import axios from 'axios';
import React, { Component } from 'react';

class SentitemsComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            createUser : {
                name : '',
                job : ''
            }
        }
    }

    onHandleInput = (event) => {
        this.setState({
            createUser : { ...this.state.createUser, [event.target.name] : event.target.value }
        })      
    }

    onCreateUser(){
        console.log(this.state.createUser)
        // const url = "https://reqres.in/api/users";

        // axios.post(url, this.state.createUser)
        // .then((response) => {
        //     console.log(response);
        // })
        // .catch((error) => {
        //     console.log(error);
        // })

        const url = "https://reqres.in/api/users/2";

        axios.put(url, this.createUser)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <h1>This is sent items component</h1>
                <div>
                    <label>Enter user name :</label>
                    <input type="text" name="name" placeholder="Please enter user name.." onChange={this.onHandleInput} />
                </div>
                <div>
                    <label>Enter Job :</label>
                    <input type="text" name="job" placeholder="Please enter job.." onChange={this.onHandleInput} />
                </div>
                <div>
                    <button onClick={()=>{this.onCreateUser()}}>Create User</button>
                </div>
            </div>
        );
    }
}

export default SentitemsComponent;