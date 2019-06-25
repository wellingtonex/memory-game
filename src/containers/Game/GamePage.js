import React from 'react';

import { Board, Card } from '../../components';
import { connect } from 'react-redux';

const GamePage = ({ isActive, onCardClick }) => {
  return (
    <Board>
      <Card name="Test card" isActive={isActive} onClick={onCardClick} />
    </Board>
  );
}

const mapStateToProps = state => ({
  isActive: state.isActive
})

const mapDispatchToProps = dispatch => ({
  onCardClick: () => {
    dispatch({ type: "SELECT_CARD" })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
