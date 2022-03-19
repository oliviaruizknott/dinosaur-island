import React from 'react'
import WorkerSection from './WorkerSection'
import ColdStorage from '../features/dna/ColdStorage'
import AvailableDnaSection from '../features/dna/AvailableDnaSection'

const Lab = () => {
  return (
    <div className="Lab">
      {//<WorkerSection />
      }
      <ColdStorage />
      <AvailableDnaSection />
    </div>
  )
}

export default Lab;
