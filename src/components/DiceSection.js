import React, { Component } from 'react';
import { connect } from "react-redux";
import '../styles/DiceSection.scss';
import { getDice } from '../redux/selectors/DiceSectionSelector';
import Die from './Die';

class DiceSection extends Component {
  renderDice() {
    let dice = [];
    this.props.dice.forEach((die, index) => {
      const dieComponent = (
        <Die
          key={index}
          id={index}
          dieData={die}
        />
      )
      dice.push(dieComponent)
    })
    return dice;
  }

  render() {
    return (
      <div className="DiceSection">
        {this.renderDice()}
      </div>
    )
  }
}

export default connect((state) => {
  return { dice: getDice(state) }
})(DiceSection);
