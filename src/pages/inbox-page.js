import axios from 'axios';
import React, { Component } from 'react';

class InboxPageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: []
        }
    }

    listUser() {
        const url = "https://reqres.in/api/users?page=2";

        axios.get(url)
            .then((response) => {
                console.log(response.data.data);
                this.setState({
                    userList: response.data.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }



    render() {
        const users = this.state.userList.map((value, index) => {
            return (
                <tr key={index}>
                    <td>{value.id}</td>
                    <td>{value.first_name}</td>
                    <td>{value.last_name}</td>
                    <td>{value.email}</td>
                    <td>
                        <img src={value.avatar} />
                    </td>
                </tr>
            )
        })

        // console.log(this.props.location.state)
        // const data = this.props.location.state;

        return (
            <div>
                {/* <h1>The user name is {data.email}</h1> */}
                <h1>Welcome to Inbox component</h1>
                
                <button onClick={() => this.listUser()}>List User</button>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Email</td>
                            <td>Profile Picture</td>
                        </tr>
                    </thead>
                    <tbody>

                        {users}

                    </tbody>
                </table>
            </div>
        );
    }
}

export default InboxPageComponent;