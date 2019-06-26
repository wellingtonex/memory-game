import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { select, put, call, takeEvery, delay } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";

const initialState = {
  isLocked: false,
  cards: [
    { id: 1, key: 1, name: "Carta 1", isActive: false, hasMatch: false },
    { id: 2, key: 2, name: "Carta 2", isActive: false, hasMatch: false },
    { id: 3, key: 3, name: "Carta 3", isActive: false, hasMatch: false },
    { id: 1, key: 4, name: "Carta 1", isActive: false, hasMatch: false },
    { id: 2, key: 5, name: "Carta 2", isActive: false, hasMatch: false },
    { id: 3, key: 6, name: "Carta 3", isActive: false, hasMatch: false }
  ]
};

function* selectCard(action) {
  const { key } = action;
  const cards = yield select(state => state.cards);
  const isLocked = yield select(state => state.isLocked);
  const index = cards.findIndex(c => c.key === key);
  const otherCardIndex = cards.findIndex(c => c.isActive && !c.hasMatch);

  if (!isLocked && index > -1 && !cards[index].isActive) {
    yield put({ type: "OPEN_CARD", index });

    if (otherCardIndex > -1) {
      if (cards[index].id === cards[otherCardIndex].id) {
        yield put({ type: "SET_MATCH", index1: index, index2: otherCardIndex });
      } else {
        yield put({ type: "LOCK" });
        yield delay(1500)
        yield put({
          type: "CLOSE_CARDS",
          index1: index,
          index2: otherCardIndex
        });
      }
    }
  }
}

function* gameSaga() {
  yield takeEvery("SELECT_CARD", selectCard);
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOCK":
      return {
        ...state,
        isLocked: true
      };
    case "OPEN_CARD": {
      const cards = state.cards.slice();

      cards[action.index].isActive = true;

      return {
        ...state,
        cards
      };
    }
    case "SET_MATCH": {
      const cards = state.cards.slice();

      cards[action.index1].hasMatch = true;
      cards[action.index2].hasMatch = true;

      return {
        ...state,
        cards
      };
    }
    case "CLOSE_CARDS": {
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

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  gameReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(gameSaga);

export default store;
