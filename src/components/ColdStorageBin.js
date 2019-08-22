import React, { Component } from 'react';
import Dna from './Dna';
import '../styles/ColdStorageBin.scss';

class ColdStorageBin extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(`We’ll increase cold storage for ${e.target.id}`)
  }

  render() {
    let style = { "backgroundColor": this.props.color }
    return (
      <div className="ColdStorageBin">
        <Dna type={this.props.id} />
        <p className="amounts">{this.props.stored} / {this.props.limit}</p>
        <button id={this.props.id} onClick={this.handleClick}>+</button>
      </div>
    )
  }
}

export default ColdStorageBin;
