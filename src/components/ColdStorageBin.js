import React, { Component } from 'react';
import '../styles/ColdStorageBin.scss';

class ColdStorageBin extends Component {
  render() {
    let style = { "backgroundColor": this.props.color }
    return (
      <div className="ColdStorageBin">
        <div className={`dnaName ${this.props.shape}`} style={style}>{this.props.id}</div>
        <p className="amounts">{this.props.stored} / {this.props.limit}</p>
        <button>+</button>
      </div>
    )
  }
}

export default ColdStorageBin;
