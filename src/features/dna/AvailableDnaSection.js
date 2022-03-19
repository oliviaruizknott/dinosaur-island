import React from 'react'
import { useSelector, shallowEqual } from "react-redux"

import { selectAvailableDna } from './dnaSlice'
import AvailableDna from './AvailableDna'

const AvailableDnaSection = () => {
  const availableDna = useSelector(selectAvailableDna, shallowEqual)

  const renderDice = () => {
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
      {renderDice()}
    </div>
  )
}

export default AvailableDnaSection
