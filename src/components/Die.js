import React, { Component } from 'react';
import Dna from './Dna';
import '../styles/Die.scss';

class Die extends Component {
  renderDnaType() {
    let dnas = [];
    for (let i = 0; i < this.props.dnaCount; i++) {
      const dna = <Dna type={this.props.dnaType} />;
      dnas.push(dna);
    }
    return dnas;
  }

  render() {
    return (
      <div className="Die">
        <div className="dnaCount">
          {this.renderDnaType()}
        </div>
        <div className="threat">{this.props.threat}</div>
      </div>
    )
  }
}

export default Die;
