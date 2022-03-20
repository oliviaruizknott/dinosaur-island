import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Dna from './Dna'
import './AvailableDna.scss'

import { selectAvailableDnaByIndex, dnaResearched } from './dnaSlice'
import { BW, AW, UP, GW } from './dnaUtilities'

const AvailableDna = ({ index }) => {
  const dispatch = useDispatch()
  const {
    amount,
    dnaType,
    researched,
  } = useSelector(state => selectAvailableDnaByIndex(state, index))

  const handleResearchClick = (e) => {
    dispatch(dnaResearched(index))
  }

  const checkDisabled = () => {
    if ([BW, AW, UP, GW].includes(dnaType)) return true

    return researched
  }

  const renderDnaType = () => {
    let dnas = [];
    for (let i = 0; i < amount; i++) {
      const dna = <Dna key={i} type={dnaType} />;
      dnas.push(dna);
    }
    return dnas;
  }

  return (
    <div className="AvailableDna">
      <div className="dnaCount">
        {renderDnaType()}
      </div>
      <button onClick={handleResearchClick} disabled={checkDisabled()}>research</button>
    </div>
  )
}

export default AvailableDna;
