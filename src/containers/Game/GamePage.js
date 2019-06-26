import React from 'react';

import { Board, Card } from '../../components';
import { connect } from 'react-redux';
import { selectCard } from '../../store/actions'

const GamePage = ({ cards, onCardClick }) => {
  return (
    <Board>
      {cards.map(card =>
        <Card
          key={card.key}
          name={card.name}
          isActive={card.isActive}
          onClick={() => { onCardClick(card.key) }}
        />
      )}
    </Board>
  );
}

const mapStateToProps = state => ({
  cards: state.cards
})

const mapDispatchToProps = {
  onCardClick: selectCard
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
