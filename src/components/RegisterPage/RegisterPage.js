import React, { Component } from 'react';
import {connect} from 'react-redux';
import './RegisterPage.css';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    passwordConfirm: '',
    zipCode: '',
    name: '',
  };
  
  // handle register click
  registerUser = (event) => {
    event.preventDefault();
    if(this.state.password !== this.state.passwordConfirm){
      this.props.dispatch({type: 'REGISTRATION_PASSWORD_ERROR'})
    }
    else if (this.state.username && this.state.password && this.state.passwordConfirm
             && this.state.zipCode && this.state.name) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          zipCode: this.state.zipCode,
          name: this.state.name
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser
  
  // handle input value change
  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <div className="registerForm">
          <div className="innerForm">
            <form onSubmit={this.registerUser}>
              <h1>Register User</h1>
              <div>
                <label htmlFor="username">
                  Username:
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChangeFor('username')}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="password">
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChangeFor('password')}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="passwordConfirm">
                  Confirm Password:
                  <input
                    type="password"
                    name="passwordConfirm"
                    value={this.state.passwordConfirm}
                    onChange={this.handleInputChangeFor('passwordConfirm')}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="zipCode">
                  Zip Code:
                  <input
                    type="number"
                    name="zipCode"
                    value={this.state.zipCode}
                    onChange={this.handleInputChangeFor('zipCode')}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="name">
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChangeFor('name')}
                  />
                </label>
              </div>
              <div>
                <input
                  className="register"
                  type="submit"
                  name="submit"
                  value="Register"
                />
              </div>
          </form>
          </div>
        </div>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

