import React, { Component } from 'react';

class Alert extends Component {
  render() {
    return (
      <div className="alert" style={this.props.error ? { opacity: 1 } : { opacity: 0 }}>
        <i className="fas fa-exclamation-circle"></i> {this.props.userName} account doesn't exist!
      </div>
    )
  }
}

export default Alert;
