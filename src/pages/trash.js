import axios from 'axios';
import React, { Component } from 'react';

class TrashComponent extends Component {
    
    onDeleteUser(){
        const url = "https://reqres.in/api/users/2";
        axios.delete(url)
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
              <h1>This is a trash component</h1> 
              <button onClick={()=>{this.onDeleteUser()}}>Delete User</button>
            </div>
        );
    }
}

export default TrashComponent;