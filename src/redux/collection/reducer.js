import { ADD_CARD, REMOVE_CARD } from "./actions"

const defaultState = {
  ownedCards: [],
}

export const collectionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        ownedCards: [...state.ownedCards, action.card],
      }
    case REMOVE_CARD:
      return {
        ...state,
        ownedCards: state.ownedCards.filter(card => card.id !== action.card.id)
      }
    default:
      return state
  }
}
