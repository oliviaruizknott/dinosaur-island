import React from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { reset, selectDnaIds } from './dnaSlice';
import ColdStorageBin from './ColdStorageBin';

const ColdStorage = () => {
  const dnaIds = useSelector(selectDnaIds, shallowEqual)
  const dispatch = useDispatch()

  const handleResetClick = (e) => {
    dispatch(reset())
  }

  const renderBins = () => {
    return dnaIds.map((id, index) => {
      return (
        <ColdStorageBin
          key={index}
          id={id}
        />
      )
    })
  }

  return (
    <div className="ColdStorage">
      {renderBins()}
      <button onClick={handleResetClick}>reset DNA</button>
    </div>
  )
}

export default ColdStorage;
