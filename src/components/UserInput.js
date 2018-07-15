import React, { Component } from 'react';

class UserInput extends Component {

  constructor() {
    super()
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    // debugger;
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input onChange={this.handleChange} type="text" name="username"/>
          <br />
          <label>Hometown:</label>
          <input onChange={this.handleChange} type="text" name="hometown" />
          <br />
          <input type="Submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
