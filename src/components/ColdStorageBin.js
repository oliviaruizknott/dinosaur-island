import React, { Component } from 'react';
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
        <div className={`dnaName ${this.props.shape}`} style={style}>{this.props.id}</div>
        <p className="amounts">{this.props.stored} / {this.props.limit}</p>
        <button id={this.props.id} onClick={this.handleClick}>+</button>
      </div>
    )
  }
}

export default ColdStorageBin;
