import React from 'react';
import '../styles/Dna.scss';

const Dna = (props) => {
  return (
    <div className={`Dna ${props.type}`}>
      {props.type}
    </div>
  )
}

export default Dna;
