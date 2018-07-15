import React, { Component } from 'react';

class UserInput extends Component {
  state = {

      username: '',
      hometown: ''

  }

  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({

        [e.target.name]: e.target.value

    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Username</label>
          <input type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Hometown</label>
          <input type='text'
            name='hometown'
            value={this.state.hometown}
            onChange={this.handleChange}

          />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
