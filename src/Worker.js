import React, { Component } from 'react';
import { getRandomIntInclusive } from './utilities';
import './Worker.scss';

class Worker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  taskBar() {
    const value = getRandomIntInclusive(1,10);
    return (
      <progress value={value} max="10"></progress>
    )
  }

  render() {
    return (
      <div className="Worker">
        <div className="workerIcon">{this.props.icon}</div>
        <div className="workerInfo">
          <p>{this.props.name}</p>
          {this.taskBar()}
        </div>
      </div>
    )
  }
}

export default Worker;
