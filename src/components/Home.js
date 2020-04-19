import React from 'react';

import CardList from './CardList'
import Form from './Form'
import Cookies from 'universal-cookie';
import GithubRequest from '../requests/GithubRequest'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.cookies = new Cookies();
    this.state = { profiles: [] }

    this.addNewProfile = async (userName) => {
      const profile = await GithubRequest(userName);
      if (profile) {
        this.setState(prevState => ({
          profiles: [...prevState.profiles, profile],
        }));
      };
      return profile;
    }

    this.initializeProfiles = () => {
      let accounts = this.cookies.get('accounts');
      let accountsList = accounts ? accounts.split(',') : [];
      accountsList.map(async (account) => await this.addNewProfile(account));
    }

    this.deleteProfile = (userName) => {
      this.setState({
        profiles: this.state.profiles.filter(profile => { return profile.login !== userName })
      });
      let accounts = this.cookies.get('accounts').split(',');
      let filteredAccounts = accounts.filter(account => { return account !== userName });
      this.cookies.set('accounts', filteredAccounts.join(','));
    }

    this.initializeProfiles();
  }

  render() {
    return (
      <div className='Home'>
        <div className="header">The GitHub Cards App</div>
        <Form addNewProfile={this.addNewProfile} />
        <CardList profiles={this.state.profiles} deleteProfile={this.deleteProfile} />
      </div>
    )
  }
}

export default Home;
