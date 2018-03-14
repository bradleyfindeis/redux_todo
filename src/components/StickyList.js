import React from 'react';
import { connect } from 'react-redux';
import Sticky from './Sticky';

const filtered = (stickies, currentFilter) => {
  switch(currentFilter) {
    case 'Active':
      return stickies.filter( t => !t.complete )
    case 'Completed':
      return stickies.filter( t => t.complete )
    default:
      return stickies
  }
}

const StickyList = ({ stickies, currentFilter }) => (
  <div>
    { filtered(stickies, currentFilter).map( t => {
        return (
          <Sticky key={t.id} {...t} />
        )
      })
    }
  </div>
)

const mapStateToProps = (state) => {
  return { 
    stickies: state.stickies, 
    currentFilter: state.currentFilter 
  }
}

export default connect(mapStateToProps)(StickyList)
