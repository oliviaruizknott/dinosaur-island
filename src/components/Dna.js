import React, { Component } from 'react';
import '../styles/Dna.scss';

class Dna extends Component {
  render() {
    return (
      <div className={`Dna ${this.props.type}`}>
        {this.props.type}
      </div>
    )
  }
}

export default Dna;
