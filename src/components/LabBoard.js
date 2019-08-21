import React, { Component } from 'react';
import WorkerSection from './WorkerSection';
import ColdStorageSection from './ColdStorageSection';

class LabBoard extends Component {
  render() {
    return (
      <div className="LabBoard">
        <WorkerSection />
        <ColdStorageSection />
      </div>
    )
  }
}

export default LabBoard;
