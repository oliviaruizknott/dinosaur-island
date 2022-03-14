import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { selectDnaById, limitIncreased, tryStoredIncrease } from './dnaSlice'
import Dna from './Dna';
import './ColdStorageBin.scss';

const ColdStorageBin = ({ id }) => {
  const { stored, limit } = useSelector(state => selectDnaById(state, id))
  const dispatch = useDispatch()

  const handleIncreaseStoredClick = (e) => {
    dispatch(tryStoredIncrease(e.target.id, 1))
  }

  const handleIncreaseLimitClick = (e) => {
    dispatch(limitIncreased(e.target.id, 1))
  }

  return (
    <div className="ColdStorageBin">
      <Dna type={id} />
      <p className="amounts">
        <span>{stored}</span>
        <button id={id} onClick={handleIncreaseStoredClick}>+</button>
        /
        <span>{limit}</span>
        <button id={id} onClick={handleIncreaseLimitClick}>+</button>
      </p>
    </div>
  )
}

export default ColdStorageBin;
