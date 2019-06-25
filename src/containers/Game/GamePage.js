import React, { Component } from 'react';
import { Board, Card } from '../../components';

// const GamePage = () => {
//   return (
//     <Board>
//       <Card name="Test card" isActive="true" />
//     </Board>
//   );
// }

class GamePage extends Component {
  state = { isActive: false }

  handleCardClick = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <Board>
        <Card name="Test card" isActive={this.state.isActive} onClick={this.handleCardClick} />
      </Board>
    );
  }
}

export default GamePage;
