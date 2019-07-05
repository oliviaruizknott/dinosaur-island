import React, { Component } from 'react';

class ColdStorageBin extends Component {
  render() {
    return (
      <div className="ColdStorageBin">
        <p>{this.props.id} {this.props.stored}/{this.props.limit} <button>+</button></p>
      </div>
    )
  }
}

export default ColdStorageBin;
