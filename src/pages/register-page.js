import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class RegisterPageComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      register: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        dateOfBirth: '',
        hobbies: [],
        city: '',
        address: '',
        gender: '',
      },
      error: {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        dateOfBirth: false,
        gender: false,
        hobbies: false,
        address: false,
        city: false
      }
    };

  }

  onHandleInput = (event) => {
    if(event.target.type === "checkbox"){
      if(event.target.checked){
        this.state.register.hobbies.push(event.target.value);
      }
      else{
        const index = this.state.register.hobbies.findIndex((value) => {
          return value === event.target.value;
        });
        this.state.register.hobbies.splice(index, 1);
      }

      this.setState({
        hobbies : this.state.register.hobbies
      })
    }
    else{
      this.setState({
        register : { ...this.state.register, [event.target.name] : event.target.value }
      })
    }
  }

  onCreateAccount(){
    console.log(this.state.register)

    for(let key in this.state.register){
      if(key === 'hobbies'){
        if(this.state.register.hobbies.length === 0){
          this.state.error.hobbies = true;
        }
        else{
          this.state.error.hobbies = false;
        }
      }
      else if(this.state.register[key] === ''){
        this.state.error[key] = true;
      }
      else{
        this.state.error[key] = false;
      } 
    }

    this.setState({
      error : this.state.error
    })

  }

  onFocusInput = (event) => {
    this.setState({
      error: {...this.state.error,  [event.target.name] : false}
    })
  }
  
  onBlurInput = (event) => {
    if(event.target.value.length == 0){
      this.setState({
        error : {...this.state.error, [event.target.name] : true}
      })
    }
  }

  render() {

    // const status = true;
    // const age = 19;

    return (
      <div>
        <h1>Welcome to Registeration Page</h1>
        <div className="login-form">
          <div className="m-bottom-15">
            <label className="label">Enter Your First Name: </label>
            <input type="text" name="firstName" placeholder="Enter the First Name" onChange={this.onHandleInput} autoComplete="off" onFocus={this.onFocusInput} onBlur={this.onBlurInput} />
            {this.state.error.firstName &&
              <div>
                <span className="error-msg">Please enter a valid First name</span>
              </div>
            }
          </div>
          <div className="m-bottom-15">
            <label className="label">Enter Your Last Name: </label>
            <input type="text" name="lastName" placeholder="Enter the Last Name" onChange={this.onHandleInput} onFocus={this.onFocusInput} onBlur={this.onBlurInput} />
            {this.state.error.lastName &&
              <div>
                <span className="error-msg">Please enter a valid last name</span>
              </div>
            }
          </div>
          <div className="m-bottom-15">
            <label className="label">Enter Your Email ID: </label>
            <input type="text" name="email" placeholder="Enter the Email ID here" onChange={this.onHandleInput} onFocus={this.onFocusInput} onBlur={this.onBlurInput} />
            {this.state.error.email &&
              <div>
                <span className="error-msg">Please enter a valid Email Id</span>
              </div>
            }
          </div>
          <div className="m-bottom-15">
            <label className="label">Enter Your Password: </label>
            <input type="password" name="password" placeholder="Enter the password here" onChange={this.onHandleInput} onFocus={this.onFocusInput} onBlur={this.onBlurInput} />
            {this.state.error.password &&
              <div>
                <span className="error-msg">Please enter a valid password</span>
              </div>
            }
          </div>
          <div className="m-bottom-15">
            <label className="label">Enter Your D.O.B.: </label>
            <input type="date" name="dateOfBirth" onChange={this.onHandleInput} />
            {this.state.error.dateOfBirth &&
              <div>
                <span className="error-msg">Please enter a valid Birthday</span>
              </div>
            }
          </div>
          <div className="m-bottom-15">
            <label className="label" >Select your Gender :</label>
            <input type="radio" name="gender" value="male" onChange={this.onHandleInput} />Male
            <input type="radio" name="gender" value="female" onChange={this.onHandleInput} />Female
            <input type="radio" name="gender" value="Not want to specify" onChange={this.onHandleInput} />Others
            {this.state.error.gender &&
              <div>
                <span className="error-msg">Please select a valid Gender</span>
              </div>
            }
          </div>
          <div className="m-bottom-15">
            <label className="label"  >Select your Hobbies :</label>
            <input type="checkbox" name="hobbies" value="cricket" onChange={this.onHandleInput} />Cricket
            <input type="checkbox" name="hobbies" value="chess" onChange={this.onHandleInput} />Chess
            <input type="checkbox" name="hobbies" value="football" onChange={this.onHandleInput} />Foot Ball
            <input type="checkbox" name="hobbies" value="hockey" onChange={this.onHandleInput} />Hockey
            <input type="checkbox" name="hobbies" value="carrom" onChange={this.onHandleInput} />Carrom
            {this.state.error.hobbies &&
              <div>
                <span className="error-msg">Please select a valid Hobbies</span>
              </div>
            }
          </div>
          <div className="m-bottom-15">
            <label className="label">Enter your Address :</label>
            <textarea className="text-box" name="address" placeholder="Please enter your address.." onChange={this.onHandleInput} onFocus={this.onFocusInput} onBlur={this.onBlurInput} />
            {this.state.error.address &&
              <div>
                <span className="error-msg">Please enter a valid address</span>
              </div>
            }
          </div>
          <div className="m-bottom-15">
            <label className="label" >Select your City :</label>
            <select className="input" defaultValue="" name="city" onChange={this.onHandleInput}>
              <option value="" disabled>Please select any City</option>
              <option value="Chennai - CH">Chennai</option>
              <option value="Mumbai - MU">Mumbai</option>
              <option value="Delhi - DEL">Delhi</option>
              <option value="Pune - PU">Pune</option>
              <option value="Cochin - KO">Cochin</option>
            </select>
            {this.state.error.city &&
              <div>
                <span className="error-msg">Please select a valid City</span>
              </div>
            }
          </div>
          <div>
            <button onClick={() => { this.onCreateAccount() }}>Create My Account</button>
          </div>
        </div>
        {/* <div>
          {status && <h1>Hi this is IF condition</h1>}
          {age > 18 ? <h1>eligible for Vote</h1> : <h1>Not eligible for vote</h1>}
        </div> */}
        <NavLink to="/home">Click to go Home Page</NavLink>
      </div>
    );
  }
}




export default RegisterPageComponent;