import React from 'react';
import './Dna.scss';

const Dna = (props) => {
  return (
    <div className={`Dna ${props.type}`}>
      {props.type}
    </div>
  )
}

export default Dna;
