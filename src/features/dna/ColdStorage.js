import React from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { storageReset, selectStoredDnaIds } from './dnaSlice'
import ColdStorageBin from './ColdStorageBin'

const ColdStorage = () => {
  const dnaIds = useSelector(selectStoredDnaIds, shallowEqual)
  const dispatch = useDispatch()

  const handleResetClick = (e) => {
    dispatch(storageReset())
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
      <button onClick={handleResetClick}>reset DNA storage</button>
    </div>
  )
}

export default ColdStorage;
