import React, { Component } from 'react';
import { shuffle } from '../utilities';
import Worker from './Worker';

class WorkerSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.generateWorkers();
  }

  generateWorkers() {
    const scientistEmoji = ["👩‍🔬", "👩🏻‍🔬", "👩🏼‍🔬", "👩🏽‍🔬", "👩🏾‍🔬", "👩🏿‍🔬", "👨‍🔬", "👨🏻‍🔬", "👨🏼‍🔬", "👨🏽‍🔬", "👨🏾‍🔬", "👨🏿‍🔬"];
    const finalScientistEmoji = shuffle(scientistEmoji).slice(0,3);
    let scientists = finalScientistEmoji.map((emoji, i) => {
      return {
        icon: emoji,
        name: `Scientist, Level ${i+1}`
      }
    })

    const workerEmoji = ["👩‍💼", "👩🏻‍💼", "👩🏼‍💼", "👩🏽‍💼", "👩🏾‍💼", "👩🏿‍💼", "👨‍💼", "👨🏻‍💼", "👨🏼‍💼", "👨🏽‍💼", "👨🏾‍💼", "👨🏿‍💼"];
    const finalWorkerEmoji = shuffle(workerEmoji).slice(0,4);
    let workers = finalWorkerEmoji.map((emoji, i) => {
      return {
        icon: emoji,
        name: "Worker"
      }
    });

    let allWorkers = scientists.concat(workers);

    return allWorkers
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
    let workers = this.workerComponents();
    return (
      <div className="WorkerSection">
        {workers}
      </div>
    )
  }
}

export default WorkerSection;
