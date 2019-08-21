import React, { Component } from 'react';
import { connect } from "react-redux";
import { getDna } from '../redux/selectors/ColdStorageSectionSelector';
import ColdStorageBin from './ColdStorageBin';

class ColdStorageSection extends Component {
  binComponents() {
    return Object.keys(this.props.dna).map((key, index) => {
      return (
        <ColdStorageBin
          key={index}
          id={key}
          type={this.props.dna[key].metadata.type}
          color={this.props.dna[key].metadata.color}
          shape={this.props.dna[key].metadata.shape}
          stored={this.props.dna[key].stored}
          limit={this.props.dna[key].limit}
        />
      )
    });
  }

  render() {
    return (
      <div className="ColdStorageSection">
        {this.binComponents()}
      </div>
    )
  }
}

export default connect((state) => {
  return { dna: getDna(state) }
})(ColdStorageSection);
