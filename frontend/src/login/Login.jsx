import React, { Component } from 'react';

class Login extends Component {
  // constructor() {
  //   super();
  // }

  handleSubmit = () => {
    const username = this.usernameInput.value;
    const password = this.passwordInput.value;
    this.props.tryAuth(username, password)
  }

  render() {
    return (
      <div>
        <input
          id='username'
          ref={el => this.usernameInput = el}
        />
        <input
          id='password'
          ref={el => this.passwordInput = el}
        />
        <div
          id='submit'
          onClick={this.handleSubmit}
        >
          Submit
        </div>
      </div>
    );
  }
}

export default Login
