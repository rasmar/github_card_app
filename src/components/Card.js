import React, { Component } from 'react';

class Card extends Component {
  profile = this.props;
  score = this.profile.public_repos * 10 + this.profile.followers *5;
  deleteCard = this.props.deleteCard;

  render() {
    return (
      <div className="card">
        <a href={this.profile.html_url}><img src={this.profile.avatar_url} alt="avatar" /></a>
        <div className="card__info">
          <div className="card__name">{this.profile.name}</div>
          <div className="card__company">{this.profile.company}</div>
          <div className="card__bio">{this.profile.bio}</div>
        </div>
        <div className="card__score">{this.score}</div>
        <div className="card__delete" onClick={ () => this.deleteCard(this.profile.login)}>X</div>
      </div>
    )
  }
}

export default Card;
