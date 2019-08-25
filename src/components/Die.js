import React, { Component } from 'react';
import Dna from './Dna';
import '../styles/Die.scss';
import { shuffle } from '../utilities';

class Die extends Component {
  constructor(props) {
    super(props);

    this.state = {
      side: null
    }

    this.rollDie = this.rollDie.bind(this);
  }

  componentWillMount() {
    this.rollDie();
  }

  rollDie() {
    const copyOfDieData = [...this.props.dieData];
    const side = shuffle(copyOfDieData)[0];
    this.setState({ side });
  }

  renderDnaType() {
    let dnas = [];
    for (let i = 0; i < this.state.side.dnaCount; i++) {
      const dna = <Dna key={i} type={this.state.side.dnaType} />;
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
        <div className="threat">{this.state.side.threat}</div>
      </div>
    )
  }
}

export default Die;
