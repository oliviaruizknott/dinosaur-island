import React from 'react'
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import { refreshAvailable, selectAvailableDna } from './dnaSlice'
import AvailableDna from './AvailableDna'

const AvailableDnaSection = () => {
  const availableDna = useSelector(selectAvailableDna, shallowEqual)
  const dispatch = useDispatch()

  const handleRefreshClick = (e) => {
    dispatch(refreshAvailable())
  }

  const renderAvailableDna = () => {
    let dice = [];
    for (let i = 0; i < availableDna.length; i++) {
      dice.push(
        <AvailableDna
          key={i}
          index={i}
        />
      )
    }
    return dice;
  }

  return (
    <div className="AvailableDnaSection">
      {renderAvailableDna()}
      <button onClick={handleRefreshClick}>refresh available DNA</button>
    </div>
  )
}

export default AvailableDnaSection
