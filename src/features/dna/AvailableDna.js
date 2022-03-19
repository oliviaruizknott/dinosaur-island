import React from 'react'
import { useSelector } from 'react-redux'
import Dna from './Dna'
import './AvailableDna.scss';

import { selectAvailableDnaByIndex } from './dnaSlice'

const AvailableDna = ({ index }) => {
  const {
    count,
    dnaType,
    threat,
  } = useSelector(state => selectAvailableDnaByIndex(state, index))

  const renderDnaType = () => {
    let dnas = [];
    for (let i = 0; i < count; i++) {
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
      <div className="threat">{threat}</div>
    </div>
  )
}

export default AvailableDna;
