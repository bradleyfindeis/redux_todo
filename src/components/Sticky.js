import React from 'react';
import { connect } from 'react-redux';
import { toggleSticky } from '../actions/stickies';

const styles = {
  complete: { 
    cursor: 'pointer',
    textDecoration: 'line-through', 
    color: 'red',
  }
}

const Sticky = ({ 
  id, 
  name, 
  complete, 
  dispatch 
}) => (
  <div
    style={ complete ? styles.complete : {} }
    onClick={ () => dispatch(toggleSticky(id)) }
  >
    {name}
  </div>
)

export default connect()(Sticky)



