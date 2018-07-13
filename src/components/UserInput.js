import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    }, () => {console.log(this.state)});
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({type: 'ADD_USER', user:this.state});
    console.log(this.props.store.getState());
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type="text" name="username" placeholder="username" onChange={this.handleChange}></input>
          <input type="text" name="hometown" placeholder="hometown" onChange={this.handleChange}></input>
          <input type="submit" ></input>
        </form>
      </div>
    );
  }
};

export default UserInput;
