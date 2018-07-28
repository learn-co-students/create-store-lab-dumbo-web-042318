import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  }

  handleChange = (e) => {
    this.setState({...this.state, [e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          Username: <input type='text' name='username' onChange={this.handleChange} /><br />
          Hometown: <input type='text' name='hometown' onChange={this.handleChange} /><br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
