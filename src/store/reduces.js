import { LOCK, OPEN_CARD, SET_MATCH, CLOSE_CARDS } from './actions';
import ListBuild from '../builders/ListBuilder'


const initialState = {
  isLocked: false,
  cards: new ListBuild().createList(3).build()
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCK:
      return {
        ...state,
        isLocked: true
      };
    case OPEN_CARD: {
      const cards = state.cards.slice();

      cards[action.index].isActive = true;

      return {
        ...state,
        cards
      };
    }
    case SET_MATCH: {
      const cards = state.cards.slice();

      cards[action.index1].hasMatch = true;
      cards[action.index2].hasMatch = true;

      return {
        ...state,
        cards
      };
    }
    case CLOSE_CARDS: {
      const cards = state.cards.slice();

      cards[action.index1].isActive = false;
      cards[action.index2].isActive = false;

      return {
        ...state,
        isLocked: false,
        cards
      };
    }
    default:
      return state;
  }
};

export default gameReducer;