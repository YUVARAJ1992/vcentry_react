import axios from 'axios';
import React, { Component } from 'react';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            register: {
                first_name: "",
                last_name: "",
                email: "",
                address1: "",
                address2: "",
                country: "",
                state: "",
                city: ""
            },
            countryList: [],
            stateList: [],
            cityList: []
        };

    }

    componentDidMount() {
        const url = "https://concord-test.herokuapp.com/api/countries";

        axios.get(url)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    countryList: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onHandleInput = (event) => {
        console.log(event.target.value)
    }


    onCreateAccount() {
        console.log(this.state.register)
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <h1>Create New Account</h1>
                    </div>
                    <div>
                        <label>First Name: </label>
                        <input type="text" placeholder="Enter the First Name" onChange={this.onHandleInput} />
                    </div>
                    <div >
                        <label>Last Name: </label>
                        <input type="text" placeholder="Enter the Last Name" onChange={this.onHandleInput} />
                    </div>
                    <div>
                        <label>Email ID: </label>
                        <input type="email" placeholder="Enter the Email ID here" onChange={this.onHandleInput} />
                    </div>
                    <div>
                        <h2>Address</h2>
                        <label>Address 1:</label>
                        <textarea placeholder="Please enter your address1.." onChange={this.onHandleInput} />
                    </div>
                    <div>
                        <label>Address 2:</label>
                        <textarea placeholder="Please enter your address2.." onChange={this.onHandleInput} />
                    </div>
                    <div>
                        <label>Country :</label>
                        <select defaultValue="" name="country" onChange={this.onHandleInput}>
                            <option value="" disabled>Please select any Country</option>
                            <option></option>
                        </select>
                    </div>
                    <div>
                        <label>State :</label>
                        <select defaultValue="" name="state" onChange={this.onHandleInput}>
                            <option value="" disabled>Please select State</option>
                            <option></option>
                        </select>
                    </div>
                    <div>
                        <label>City :</label>
                        <select defaultValue="" name="city" onChange={this.onHandleInput}>
                            <option value="" disabled>Please select City</option>
                            <option></option>
                        </select>
                    </div>
                    <div>
                        <button onClick={() => { this.onCreateAccount() }}>Create My Account</button>
                    </div>
                </div>
            </div>
        );
    }
}


export default Register;