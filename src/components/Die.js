import React, { Component } from 'react';
import Dna from './Dna';
import '../styles/Die.scss';
import { shuffle } from '../utilities';

class Die extends Component {
  constructor(props) {
    super(props);

    this.side = this.rollDie();
  }

  rollDie() {
    return shuffle(this.props.dieData)[0]
  }

  renderDnaType() {
    let dnas = [];
    for (let i = 0; i < this.side.dnaCount; i++) {
      const dna = <Dna type={this.side.dnaType} />;
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
        <div className="threat">{this.side.threat}</div>
      </div>
    )
  }
}

export default Die;
