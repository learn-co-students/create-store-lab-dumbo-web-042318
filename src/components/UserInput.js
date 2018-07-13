import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    });
  }

  handleChange = (e) => {
    console.log(this.state);
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="username" 
          />
          <input
            type="text"
            name="hometown"
            value={this.state.hometown}
            onChange={this.handleChange}
            placeholder="hometown" 
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
