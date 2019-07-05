import React, { Component } from 'react';
import { connect } from "react-redux";
import { getWorkers } from '../redux/selectors/WorkerSectionSelector';
import Worker from './Worker';

class WorkerSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  workerComponents() {
    return Object.keys(this.props.workers).map((key, index) => {
      return (
        <Worker
          key={index}
          id={key}
          icon={this.props.workers[key].icon}
          title={this.props.workers[key].title}
        />
      )
    });
  }

  render() {
    return (
      <div className="WorkerSection">
        {this.workerComponents()}
      </div>
    )
  }
}

export default connect((state) => {
  return { workers: getWorkers(state) }
})(WorkerSection);
