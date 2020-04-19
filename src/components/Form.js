import React, { Component } from 'react';
import Alert from './Alert'
import Cookies from 'universal-cookie';

class Form extends Component {
  state = { userName: '', error: false };
  addNewProfile = this.props.addNewProfile;
  cookies = new Cookies();

  handleSubmit = async (event) => {
    event.preventDefault();
    const profile = await this.addNewProfile(this.state.userName)
    if (profile) {
      this.setState({ userName: '', error: false });
      let currentAccounts = this.cookies.get('accounts')
      let newAccounts = currentAccounts ? currentAccounts + `,${profile.login}` : profile.login 
      this.cookies.set('accounts', newAccounts)
    } else {
      this.handleError();
    }
  }

  handleChange = (event) => {
    this.setState({ userName: event.target.value, error: false })
  };

  handleError = () => {
    this.setState({ userName: this.state.userName, error: true });
  }

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='GitHub username'
            value={this.state.userName}
            onChange={this.handleChange}
            required
          />
          <button><i className='fas fa-plus'></i></button>
          <Alert userName={this.state.userName} error={this.state.error} />
        </form>
      </div>
    )
  }
}

export default Form;
