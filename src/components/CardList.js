import React, { Component } from 'react';
import Card from './Card'

class CardList extends Component {
  deleteProfile = this.props.deleteProfile;

  deleteCard = (userName) => {
    this.props.deleteProfile(userName);
  }

  render() {
    return (
      <div className='card-list'>
        {this.props.profiles.map(profile => <Card key={profile.id} deleteCard={this.deleteCard} {...profile} />)}
      </div>
    )
  }
}

export default CardList;
