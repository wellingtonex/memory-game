import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const gameReducer = (state = { isActive: false }, action) => {
  switch (action.type) {
    case "SELECT_CARD":
      return {
        ...state,
        isActive: !state.isActive
      }
    default:
      return state;
  }
}

const store = createStore(gameReducer, composeWithDevTools());

export default store;