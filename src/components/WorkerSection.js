import React, { Component } from 'react';
import Worker from './Worker';

class WorkerSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  workerComponents() {
    return this.generateWorkers().map((worker, i) => {
      return (
        <Worker
          key={i}
          id={i}
          icon={worker.icon}
          name={worker.name}
        />
      )
    });
  }

  render() {
    return (
      <div className="WorkerSection">
        Workers will go here.
      </div>
    )
  }
}

export default WorkerSection;
