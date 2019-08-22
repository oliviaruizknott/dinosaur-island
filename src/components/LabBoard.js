import React, { Component } from 'react';
import WorkerSection from './WorkerSection';
import ColdStorageSection from './ColdStorageSection';
import DiceSection from './DiceSection';

class LabBoard extends Component {
  render() {
    return (
      <div className="LabBoard">
        <WorkerSection />
        <ColdStorageSection />
        <DiceSection />
      </div>
    )
  }
}

export default LabBoard;
